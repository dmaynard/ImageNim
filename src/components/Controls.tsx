import React, { ChangeEvent } from 'react';
import { PlayMode, Difficulty, Player } from '../types';

interface ControlsProps {
  playMode: PlayMode;
  difficulty: Difficulty;
  exploreMode: boolean;
  hintMode: boolean;
  showPhotoCredits: boolean;
  currentTurn?: Player;
  categories: { id: string; name: string }[];
  selectedCategoryId: string;
  onNewGame: () => void;
  onReplay: () => void;
  onPlayModeChange: (mode: PlayMode) => void;
  onDifficultyToggle: () => void;
  onExploreToggle: () => void;
  onHintToggle: () => void;
  onPhotoCreditsToggle: () => void;
  onCategoryChange: (categoryId: string) => void;
  onCustomImagesUpload: (files: FileList) => void;
  onOpenHelp: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  playMode,
  difficulty,
  exploreMode,
  hintMode,
  showPhotoCredits,
  currentTurn,
  categories,
  selectedCategoryId,
  onNewGame,
  onReplay,
  onPlayModeChange,
  onDifficultyToggle,
  onExploreToggle,
  onHintToggle,
  onPhotoCreditsToggle,
  onCategoryChange,
  onCustomImagesUpload,
  onOpenHelp
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onCustomImagesUpload(e.target.files);
    }
  };

  return (
    <div className="controls-toolbar" id="controls-toolbar">
      <div className="button-group">
        <button
          className="btn btn-primary"
          onClick={onNewGame}
          id="btn-new-game"
        >
          🎮 New Game
        </button>

        <button
          className="btn"
          onClick={onReplay}
          id="btn-replay"
        >
          🔄 Replay Game
        </button>

        <select
          className="select-input"
          value={playMode}
          onChange={e => onPlayModeChange(e.target.value as PlayMode)}
          id="select-play-mode"
        >
          <option value="SOLO">1 Player (Solitaire): Clear Center</option>
          <option value="VERSUS">2 Players (Versus): Match Assigned Target</option>
        </select>

        <button
          className={`btn btn-toggle ${difficulty === 'HARD' ? 'active' : ''}`}
          onClick={onDifficultyToggle}
          id="btn-difficulty-toggle"
          title={difficulty === 'EASY' ? 'Easy Mode: 2 or 3 initial cards XORed into center' : 'Hard Mode: 3 to 8 initial cards XORed into center'}
        >
          {difficulty === 'EASY' ? '🌱 Mode: Easy (2-3 Cards)' : '🔥 Mode: Hard (3-8 Cards)'}
        </button>

        <button
          className={`btn btn-toggle ${exploreMode ? 'active' : ''}`}
          onClick={onExploreToggle}
          id="btn-explore-toggle"
          title="Explore Mode: No win condition, freely experiment with XOR tiles. Turning OFF resets game."
        >
          🔍 Explore: {exploreMode ? 'ON' : 'OFF'}
        </button>

        <button
          className={`btn btn-toggle ${hintMode ? 'active' : ''}`}
          onClick={onHintToggle}
          id="btn-hints-toggle"
        >
          💡 Hints: {hintMode ? 'ON' : 'OFF'}
        </button>

        <button
          className={`btn btn-toggle ${showPhotoCredits ? 'active' : ''}`}
          onClick={onPhotoCreditsToggle}
          id="btn-credits-toggle"
          title="Toggle photographer attribution credits on picture cards"
        >
          📷 Credits: {showPhotoCredits ? 'ON' : 'OFF'}
        </button>

        {playMode === 'VERSUS' && currentTurn && (
          <div className="turn-badge" id="player-turn-indicator">
            👉 Turn: <strong style={{ color: currentTurn === 'Player 1' ? '#00f2fe' : '#ff007f' }}>{currentTurn}</strong>
          </div>
        )}
      </div>

      <div className="button-group">
        <button
          className="btn"
          onClick={onOpenHelp}
          id="btn-help-modal"
          title="How to play and credits"
        >
          ❓ How to Play
        </button>

        <select
          className="select-input"
          value={selectedCategoryId}
          onChange={e => onCategoryChange(e.target.value)}
          id="select-category"
        >
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              📁 {cat.name}
            </option>
          ))}
        </select>

        <label className="btn btn-primary" htmlFor="custom-image-upload" id="label-upload" title="Select 8 or more photos from iPhone Photos App or computer">
          📱 Photos
          <input
            id="custom-image-upload"
            type="file"
            multiple
            accept="image/*,image/heic,image/heif"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};
