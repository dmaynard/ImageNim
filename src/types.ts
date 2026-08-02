export type PlayMode = 'SOLO' | 'VERSUS';
export type Difficulty = 'EASY' | 'HARD';
export type GameMode = PlayMode;

export type Player = 'Player 1' | 'Player 2';

export interface ImageItem {
  id: string;
  name: string;
  url: string;
  author?: string;
  authorUrl?: string;
  imageData?: ImageData;
}

export interface ImageCategory {
  id: string;
  name: string;
  description: string;
  type?: 'local' | 'unsplash' | 'custom';
  images: ImageItem[];
}

export interface TwoPlayerState {
  player1TargetIndex: number;
  player2TargetIndex: number;
  currentTurn: Player;
}

export interface GameStats {
  moves: number;
  perfectScore: number;
  startTime: number;
  endTime?: number;
  won: boolean;
  winner?: string;
}
