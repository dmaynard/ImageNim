import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Controls } from './components/Controls';
import { GameGrid } from './components/GameGrid';
import { WinModal } from './components/WinModal';
import { VictoryBanner } from './components/VictoryBanner';
import { GameMode, ImageCategory, ImageItem, Player } from './types';
import {
  initWasmEngine,
  clear_canvas,
  xor_buffers,
  count_set_bits,
  generate_initial_puzzle_mask,
  select_random_subset,
  is_canvas_black
} from './wasm';
import { loadImageAsBuffer, LoadedImageData } from './utils/imageLoader';
import { PRESET_CATEGORIES } from './presets';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 225;

export const App: React.FC = () => {
  const [wasmReady, setWasmReady] = useState(false);
  const [loading, setLoading] = useState(true);

  // Categories & Image Selection
  const [categories, setCategories] = useState<ImageCategory[]>(PRESET_CATEGORIES);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('bryce');
  const [outerDisplayItems, setOuterDisplayItems] = useState<ImageItem[]>([]);
  const [outerLoadedImages, setOuterLoadedImages] = useState<LoadedImageData[]>([]);

  // Game Mode & 2-Player Target Assignments
  const [gameMode, setGameMode] = useState<GameMode>('EASY');
  const [player1TargetIndex, setPlayer1TargetIndex] = useState<number>(0);
  const [player2TargetIndex, setPlayer2TargetIndex] = useState<number>(1);
  const [currentTurn, setCurrentTurn] = useState<Player>('Player 1');

  // Game Settings & State
  const [hintMode, setHintMode] = useState<boolean>(false);
  const [initialPuzzleMask, setInitialPuzzleMask] = useState<number>(0);
  const [toggledMask, setToggledMask] = useState<number>(0);
  const [targetBuffer, setTargetBuffer] = useState<Uint8Array | null>(null);

  // Stats & Win State
  const [nMoves, setNMoves] = useState<number>(0);
  const [perfectScore, setPerfectScore] = useState<number>(0);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [winner, setWinner] = useState<Player | undefined>(undefined);
  const [isVictoryPause, setIsVictoryPause] = useState<boolean>(false);
  const [winningCardIndex, setWinningCardIndex] = useState<number | undefined>(undefined);

  const victoryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize WASM
  useEffect(() => {
    initWasmEngine().then(() => {
      setWasmReady(true);
    });
  }, []);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (victoryTimerRef.current) {
        clearTimeout(victoryTimerRef.current);
      }
    };
  }, []);

  // Helper: Pick 8 random images from category
  const selectRandomImagesFromCategory = (category: ImageCategory) => {
    const total = category.images.length;
    const seed = BigInt(Math.floor(Date.now() + Math.random() * 1000000));
    
    // WASM select 8 outer items
    const selectedFlags = select_random_subset(8, total, seed);
    const selectedOuters: ImageItem[] = [];
    const excludedList: ImageItem[] = [];

    for (let i = 0; i < total; i++) {
      if (selectedFlags[i] === 1 && selectedOuters.length < 8) {
        selectedOuters.push(category.images[i]);
      } else {
        excludedList.push(category.images[i]);
      }
    }

    while (selectedOuters.length < 8 && excludedList.length > 0) {
      selectedOuters.push(excludedList.pop()!);
    }

    return selectedOuters;
  };

  // Start new game or shuffle new images
  const startNewGame = useCallback(async (
    replayingMask?: number,
    catId?: string,
    modeOverride?: GameMode
  ) => {
    if (!wasmReady) return;
    setLoading(true);

    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
      victoryTimerRef.current = null;
    }
    setIsVictoryPause(false);
    setWinningCardIndex(undefined);

    const activeCatId = catId || selectedCategoryId;
    const activeMode = modeOverride || gameMode;
    const category = categories.find(c => c.id === activeCatId) || categories[0];

    let currentOuters = outerLoadedImages;
    let currentItems = outerDisplayItems;

    // If a fresh new game (not replaying same puzzle), pick a new random subset of 8 images!
    if (replayingMask === undefined || outerLoadedImages.length < 8) {
      const selectedOuters = selectRandomImagesFromCategory(category);
      currentItems = selectedOuters;
      setOuterDisplayItems(selectedOuters);

      try {
        currentOuters = await Promise.all(
          selectedOuters.map(img => loadImageAsBuffer(img.url, CANVAS_WIDTH, CANVAS_HEIGHT))
        );
        setOuterLoadedImages(currentOuters);
      } catch (err) {
        console.error('Failed loading image category buffers:', err);
        setLoading(false);
        return;
      }
    }

    // In 2-Player mode, assign distinct targets for Player 1 and Player 2
    let p1Index = player1TargetIndex;
    let p2Index = player2TargetIndex;
    if (replayingMask === undefined) {
      p1Index = Math.floor(Math.random() * 8);
      p2Index = (p1Index + 1 + Math.floor(Math.random() * 7)) % 8;
      setPlayer1TargetIndex(p1Index);
      setPlayer2TargetIndex(p2Index);
      setCurrentTurn('Player 1');
    }

    const numBytes = CANVAS_WIDTH * CANVAS_HEIGHT * 4;
    const newBuffer = new Uint8Array(numBytes);
    clear_canvas(newBuffer);

    let mask = 0;
    if (replayingMask !== undefined) {
      mask = replayingMask;
    } else {
      // Pick random initial subset of 3 to 6 tiles out of 8
      const randomSeed = BigInt(Math.floor(Date.now() + Math.random() * 1000000));
      mask = generate_initial_puzzle_mask(8, 3, 6, randomSeed);
    }

    setInitialPuzzleMask(mask);
    setToggledMask(mask);
    setNMoves(0);
    setIsWon(false);
    setWinner(undefined);

    const perf = count_set_bits(mask);
    setPerfectScore(perf);

    // XOR initial subset into canvas
    for (let i = 0; i < 8; i++) {
      if ((mask & (1 << i)) !== 0) {
        xor_buffers(newBuffer, currentOuters[i].buffer);
      }
    }

    setTargetBuffer(newBuffer);
    setLoading(false);
  }, [
    wasmReady,
    selectedCategoryId,
    categories,
    gameMode,
    outerLoadedImages,
    outerDisplayItems,
    player1TargetIndex,
    player2TargetIndex
  ]);

  // Initial setup when WASM is ready
  useEffect(() => {
    if (wasmReady && outerLoadedImages.length === 0) {
      startNewGame();
    }
  }, [wasmReady]);

  // Handle category change
  const handleCategoryChange = (catId: string) => {
    setSelectedCategoryId(catId);
    startNewGame(undefined, catId);
  };

  // Handle game mode change (1 Player vs 2 Players)
  const handleGameModeChange = (mode: GameMode) => {
    setGameMode(mode);
    startNewGame(undefined, undefined, mode);
  };

  // Trigger win pause animation sequence before displaying modal summary
  const triggerVictorySequence = (winPlayer?: Player, matchedCardIdx?: number) => {
    console.log('🏆 [ImageNim] triggerVictorySequence called! winPlayer:', winPlayer, 'matchedCardIdx:', matchedCardIdx);
    setIsVictoryPause(true);
    setWinner(winPlayer);
    setWinningCardIndex(matchedCardIdx);

    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
    }

    victoryTimerRef.current = setTimeout(() => {
      console.log('⏱️ [ImageNim] 3.5s Victory pause timer completed. Showing WinModal!');
      setIsVictoryPause(false);
      setIsWon(true);
    }, 3500);
  };

  const handleSkipVictoryPause = () => {
    console.log('⏩ [ImageNim] handleSkipVictoryPause called (user skipped pause)!');
    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
      victoryTimerRef.current = null;
    }
    setIsVictoryPause(false);
    setIsWon(true);
  };

  // Handle outer picture tile click
  const handleTileClick = (index: number) => {
    console.log('🖱️ [ImageNim] Tile clicked:', index, 'isWon:', isWon, 'isVictoryPause:', isVictoryPause, 'gameMode:', gameMode);
    if (isWon || isVictoryPause || !targetBuffer || index < 0 || index >= outerLoadedImages.length) return;

    const newTarget = new Uint8Array(targetBuffer);
    const clickedImage = outerLoadedImages[index];

    // XOR clicked image into target buffer
    xor_buffers(newTarget, clickedImage.buffer);
    setTargetBuffer(newTarget);

    const newToggledMask = toggledMask ^ (1 << index);
    setToggledMask(newToggledMask);

    const moves = nMoves + 1;
    setNMoves(moves);

    if (gameMode === 'EASY') {
      // 1 Player Solitaire Mode: Win when central canvas is clear/black
      if (newToggledMask === 0 || is_canvas_black(newTarget)) {
        console.log('🎉 [ImageNim] 1P Win condition met!');
        triggerVictorySequence(undefined, undefined);
      }
    } else {
      // 2 Players Mode:
      // Check if central composite canvas matches Player 1 target (mask === 1 << p1) or Player 2 target
      const p1Mask = 1 << player1TargetIndex;
      const p2Mask = 1 << player2TargetIndex;

      const playerWhoMoved = currentTurn;
      const nextTurn: Player = currentTurn === 'Player 1' ? 'Player 2' : 'Player 1';

      console.log('🎮 [ImageNim] 2P Move:', { newToggledMask, p1Mask, p2Mask, playerWhoMoved, p1Idx: player1TargetIndex, p2Idx: player2TargetIndex });

      if (newToggledMask === p1Mask) {
        console.log('🎉 [ImageNim] 2P Win condition met: Player 1 matched target!');
        triggerVictorySequence('Player 1', player1TargetIndex);
      } else if (newToggledMask === p2Mask) {
        console.log('🎉 [ImageNim] 2P Win condition met: Player 2 matched target!');
        triggerVictorySequence('Player 2', player2TargetIndex);
      } else if (newToggledMask === 0 || is_canvas_black(newTarget)) {
        console.log('🎉 [ImageNim] 2P Win condition met: Canvas cleared by', playerWhoMoved);
        triggerVictorySequence(playerWhoMoved, undefined);
      } else {
        // Turn alternates after move if game continues
        setCurrentTurn(nextTurn);
      }
    }
  };

  // Replay exact same game setup
  const handleReplay = () => {
    startNewGame(initialPuzzleMask);
  };

  // Custom Image Upload Handler
  const handleCustomUpload = async (files: FileList) => {
    if (files.length < 8) {
      alert('Please select at least 8 image files to create a custom category!');
      return;
    }

    const customImages: ImageItem[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      customImages.push({
        id: `custom-${i}`,
        name: file.name.replace(/\.[^/.]+$/, ''),
        url
      });
    }

    const customCategory: ImageCategory = {
      id: `custom-${Date.now()}`,
      name: `Custom Set (${customImages[0].name}...)`,
      description: 'User uploaded custom image set',
      images: customImages
    };

    setCategories(prev => [customCategory, ...prev]);
    setSelectedCategoryId(customCategory.id);
    startNewGame(undefined, customCategory.id);
  };

  return (
    <div className="app-container">
      {/* App Header */}
      <header className="app-header">
        <div className="brand-title">
          <div className="brand-logo">N</div>
          <div>
            <h1 className="brand-name">ImageNim</h1>
            <p className="brand-subtitle">Visual Pixel XOR Puzzle Game</p>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-label">Moves</span>
            <span className="stat-value">{nMoves}</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">Optimal</span>
            <span className="stat-value" style={{ color: 'var(--accent-pink)' }}>
              {perfectScore}
            </span>
          </div>
        </div>
      </header>

      {/* Controls Toolbar */}
      <Controls
        gameMode={gameMode}
        hintMode={hintMode}
        currentTurn={currentTurn}
        categories={categories.map(c => ({ id: c.id, name: c.name }))}
        selectedCategoryId={selectedCategoryId}
        onNewGame={() => startNewGame()}
        onReplay={handleReplay}
        onGameModeChange={handleGameModeChange}
        onHintToggle={() => setHintMode(!hintMode)}
        onCategoryChange={handleCategoryChange}
        onCustomImagesUpload={handleCustomUpload}
      />

      {/* Victory Pause Banner */}
      {isVictoryPause && (
        <VictoryBanner
          winner={winner}
          winningCardIndex={winningCardIndex}
          onSkip={handleSkipVictoryPause}
          autoCloseMs={3500}
        />
      )}

      {/* Main 3x3 Game Grid */}
      {loading ? (
        <div className="grid-wrapper" style={{ padding: '4rem', color: 'var(--accent-cyan)' }}>
          <h3>Loading WASM Engine & Image Data...</h3>
        </div>
      ) : (
        <GameGrid
          outerImages={outerDisplayItems}
          toggledMask={toggledMask}
          hintMode={hintMode}
          gameMode={gameMode}
          player1TargetIndex={player1TargetIndex}
          player2TargetIndex={player2TargetIndex}
          targetBuffer={targetBuffer}
          canvasWidth={CANVAS_WIDTH}
          canvasHeight={CANVAS_HEIGHT}
          winningCardIndex={winningCardIndex}
          winningPlayer={winner}
          isVictoryPause={isVictoryPause}
          onTileClick={handleTileClick}
        />
      )}

      {/* Victory Modal */}
      {isWon && (
        <WinModal
          stats={{
            moves: nMoves,
            perfectScore,
            startTime: 0,
            won: true,
            winner
          }}
          onNextGame={() => startNewGame()}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
};
