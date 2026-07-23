import React from 'react';
import { GameStats } from '../types';

interface WinModalProps {
  stats: GameStats;
  onNextGame: () => void;
  onReplay: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  stats,
  onNextGame,
  onReplay
}) => {
  console.log('🚨 [ImageNim] WinModal mounted / rendering with stats:', stats);
  const is2Player = !!stats.winner;
  const isPerfect = !is2Player && stats.moves === stats.perfectScore;

  return (
    <div className="modal-overlay" id="win-modal-overlay">
      <div className="modal-content" id="win-modal-content">
        <div className="modal-trophy">🏆</div>
        <h2 className="modal-title">
          {is2Player
            ? `${stats.winner?.toUpperCase()} WINS!`
            : isPerfect
            ? 'PERFECT SCORE!'
            : 'PUZZLE SOLVED!'}
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>
          {is2Player
            ? `Congratulations! ${stats.winner} matched their target image in ${stats.moves} total moves!`
            : isPerfect
            ? `Congratulations! You solved the puzzle in the optimal ${stats.perfectScore} moves!`
            : `Great job! You solved it in ${stats.moves} moves (Optimal score was ${stats.perfectScore}).`}
        </p>

        <div className="modal-stats-grid">
          <div className="modal-stat-box">
            <div className="stat-label">{is2Player ? 'Total Moves' : 'Your Moves'}</div>
            <div className="modal-stat-val">{stats.moves}</div>
          </div>

          <div className="modal-stat-box">
            <div className="stat-label">{is2Player ? 'Mode' : 'Optimal Score'}</div>
            <div className="modal-stat-val" style={{ color: is2Player ? 'var(--accent-cyan)' : 'var(--accent-pink)', fontSize: is2Player ? '1.2rem' : '1.8rem' }}>
              {is2Player ? '2 Players' : stats.perfectScore}
            </div>
          </div>
        </div>

        <div className="button-group" style={{ width: '100%', justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={onNextGame} id="modal-btn-next">
            🎮 Next Game
          </button>
          <button className="btn" onClick={onReplay} id="modal-btn-replay">
            🔄 Replay Same Game
          </button>
        </div>
      </div>
    </div>
  );
};
