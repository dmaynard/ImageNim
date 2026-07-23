import React from 'react';
import { PictureCard } from './PictureCard';
import { TargetCanvas } from './TargetCanvas';
import { ImageItem, GameMode, Player } from '../types';

interface GameGridProps {
  outerImages: ImageItem[];
  toggledMask: number;
  hintMode: boolean;
  gameMode: GameMode;
  player1TargetIndex?: number;
  player2TargetIndex?: number;
  targetBuffer: Uint8Array | null;
  canvasWidth: number;
  canvasHeight: number;
  winningCardIndex?: number;
  winningPlayer?: Player;
  isVictoryPause?: boolean;
  onTileClick: (index: number) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({
  outerImages,
  toggledMask,
  hintMode,
  gameMode,
  player1TargetIndex,
  player2TargetIndex,
  targetBuffer,
  canvasWidth,
  canvasHeight,
  winningCardIndex,
  winningPlayer,
  isVictoryPause,
  onTileClick
}) => {
  const renderSlot = (slotIndex: number) => {
    if (slotIndex === 4) {
      return (
        <TargetCanvas
          key="target-center-canvas"
          targetBuffer={targetBuffer}
          width={canvasWidth}
          height={canvasHeight}
          gameMode={gameMode}
          isVictory={isVictoryPause}
          winningPlayer={winningPlayer}
        />
      );
    }

    const pictureIndex = slotIndex < 4 ? slotIndex : slotIndex - 1;
    const img = outerImages[pictureIndex];
    if (!img) return <div key={`empty-${slotIndex}`} className="picture-card" />;

    const isIncluded = (toggledMask & (1 << pictureIndex)) !== 0;

    let targetLabel: string | null = null;
    if (gameMode === 'HARD') {
      if (pictureIndex === player1TargetIndex) {
        targetLabel = 'P1 Target';
      } else if (pictureIndex === player2TargetIndex) {
        targetLabel = 'P2 Target';
      }
    }

    const isWinningTarget = isVictoryPause && winningCardIndex === pictureIndex;
    const isDimmed = isVictoryPause && !isWinningTarget;

    return (
      <PictureCard
        key={`pic-${pictureIndex}`}
        index={pictureIndex}
        image={img}
        isIncluded={isIncluded}
        isHinted={hintMode && !isVictoryPause}
        playerTargetLabel={targetLabel}
        isWinningTarget={isWinningTarget}
        winningPlayer={winningPlayer}
        isDimmed={isDimmed}
        onClick={() => onTileClick(pictureIndex)}
      />
    );
  };

  return (
    <div className={`grid-wrapper ${isVictoryPause ? 'victory-active' : ''}`}>
      <div className="game-grid" id="main-game-grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(slotIdx => renderSlot(slotIdx))}
      </div>
    </div>
  );
};
