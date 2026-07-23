import React, { ChangeEvent } from 'react';
import { GameMode, Player } from '../types';

interface ControlsProps {
  gameMode: GameMode;
  hintMode: boolean;
  currentTurn?: Player;
  categories: { id: string; name: string }[];
  selectedCategoryId: string;
  onNewGame: () => void;
  onReplay: () => void;
  onGameModeChange: (mode: GameMode) => void;
  onHintToggle: () => void;
  onCategoryChange: (categoryId: string) => void;
  onCustomImagesUpload: (files: FileList) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  gameMode,
  hintMode,
  currentTurn,
  categories,
  selectedCategoryId,
  onNewGame,
  onReplay,
  onGameModeChange,
  onHintToggle,
  onCategoryChange,
  onCustomImagesUpload
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
          value={gameMode}
          onChange={e => onGameModeChange(e.target.value as GameMode)}
          id="select-difficulty"
        >
          <option value="EASY">1 Player (Solitaire): Clear Center</option>
          <option value="HARD">2 Players (Versus): Match Assigned Target</option>
        </select>

        <button
          className={`btn btn-toggle ${hintMode ? 'active' : ''}`}
          onClick={onHintToggle}
          id="btn-hints-toggle"
        >
          💡 Hints: {hintMode ? 'ON' : 'OFF'}
        </button>

        {gameMode === 'HARD' && currentTurn && (
          <div className="turn-badge" id="player-turn-indicator">
            👉 Turn: <strong style={{ color: currentTurn === 'Player 1' ? '#00f2fe' : '#ff007f' }}>{currentTurn}</strong>
          </div>
        )}
      </div>

      <div className="button-group">
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

        <label className="btn" htmlFor="custom-image-upload" id="label-upload">
          📁 Upload Custom Images
          <input
            id="custom-image-upload"
            type="file"
            multiple
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};
