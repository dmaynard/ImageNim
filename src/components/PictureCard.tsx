import React from 'react';
import { ImageItem, Player } from '../types';

interface PictureCardProps {
  index: number;
  image: ImageItem;
  isIncluded: boolean;
  isHinted: boolean;
  playerTargetLabel?: string | null;
  isWinningTarget?: boolean;
  winningPlayer?: Player;
  isDimmed?: boolean;
  onClick: () => void;
}

export const PictureCard: React.FC<PictureCardProps> = ({
  index,
  image,
  isIncluded,
  isHinted,
  playerTargetLabel,
  isWinningTarget,
  winningPlayer,
  isDimmed,
  onClick
}) => {
  const cardClasses = [
    'picture-card',
    isIncluded ? 'included' : '',
    isHinted && isIncluded ? 'hinted' : '',
    playerTargetLabel === 'P1 Target' ? 'p1-target' : '',
    playerTargetLabel === 'P2 Target' ? 'p2-target' : '',
    isWinningTarget ? `winning-target ${winningPlayer === 'Player 2' ? 'win-p2' : 'win-p1'}` : '',
    isDimmed ? 'dimmed-card' : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      id={`picture-card-${index}`}
    >
      <div className="card-badge">#{index + 1}</div>

      {playerTargetLabel && (
        <div className={`card-player-target ${playerTargetLabel === 'P1 Target' ? 'p1' : 'p2'}`}>
          {playerTargetLabel}
        </div>
      )}

      {isWinningTarget && (
        <div className="winning-match-badge">
          MATCHED TARGET!
        </div>
      )}

      <img src={image.url} alt={image.name} loading="eager" />
      <div className="card-status-indicator" />
    </div>
  );
};
