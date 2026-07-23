import React from 'react';
import { Player } from '../types';

interface TurnBannerProps {
  currentTurn: Player;
  p1TargetNum: number;
  p2TargetNum: number;
}

export const TurnBanner: React.FC<TurnBannerProps> = ({
  currentTurn,
  p1TargetNum,
  p2TargetNum
}) => {
  const isP1 = currentTurn === 'Player 1';

  return (
    <div className={`turn-banner-container ${isP1 ? 'p1-turn' : 'p2-turn'}`} id="turn-banner">
      <div className="turn-banner-left">
        <span className="turn-mode-tag">⚔️ 2-PLAYER VERSUS</span>
        <span className="turn-subtext">
          P1 Target: <strong>#{p1TargetNum}</strong> | P2 Target: <strong>#{p2TargetNum}</strong>
        </span>
      </div>

      <div className="turn-banner-center">
        <div className={`turn-pill ${isP1 ? 'p1' : 'p2'}`}>
          <span className="turn-arrow">👉</span>
          <span className="turn-player-name">{currentTurn.toUpperCase()}'S TURN</span>
        </div>
      </div>
    </div>
  );
};
