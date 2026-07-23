import React, { useEffect, useState } from 'react';
import { Player } from '../types';

interface VictoryBannerProps {
  winner?: Player;
  winningCardIndex?: number;
  onSkip: () => void;
  autoCloseMs?: number;
}

export const VictoryBanner: React.FC<VictoryBannerProps> = ({
  winner,
  winningCardIndex,
  onSkip,
  autoCloseMs = 3500
}) => {
  const [timeLeftSec, setTimeLeftSec] = useState<number>(Math.ceil(autoCloseMs / 1000));
  const [canSkip, setCanSkip] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeftSec(prev => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    // Prevent immediate click-through from the winning tile click event
    const skipGuardTimer = setTimeout(() => {
      setCanSkip(true);
    }, 600);

    return () => {
      clearInterval(interval);
      clearTimeout(skipGuardTimer);
    };
  }, []);

  const handleBannerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (canSkip) {
      onSkip();
    }
  };

  const isPlayer1 = winner === 'Player 1';
  const isPlayer2 = winner === 'Player 2';
  const cardNum = winningCardIndex !== undefined ? winningCardIndex + 1 : undefined;

  return (
    <div
      className={`victory-banner-container ${isPlayer1 ? 'p1-win' : isPlayer2 ? 'p2-win' : 'solo-win'}`}
      onClick={handleBannerClick}
    >
      <div className="victory-banner-content">
        <div className="victory-trophy-badge">🏆</div>
        
        <div className="victory-text-group">
          <div className="victory-title-row">
            <span className="victory-player-tag">
              {winner ? `${winner.toUpperCase()} WINS!` : 'VICTORY!'}
            </span>
            <span className="victory-sparkle">✨</span>
          </div>

          <p className="victory-explanation">
            {winner ? (
              cardNum !== undefined ? (
                <>
                  Matched <strong>{winner}'s Target Card (#{cardNum})</strong>! The central XOR output perfectly matches the target image.
                </>
              ) : (
                <>
                  <strong>{winner}</strong> cleared the canvas and completed the winning combination!
                </>
              )
            ) : (
              'All XOR layers resolved! The central canvas is cleared.'
            )}
          </p>
        </div>

        <button className="victory-skip-btn" onClick={handleBannerClick}>
          <span>Summary</span>
          <span className="victory-timer-tag">({timeLeftSec}s) ➔</span>
        </button>
      </div>

      {/* Animated progress bar at bottom of banner */}
      <div
        className="victory-progress-bar"
        style={{ animationDuration: `${autoCloseMs}ms` }}
      />
    </div>
  );
};
