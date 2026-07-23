export type GameMode = 'EASY' | 'HARD';

export type Player = 'Player 1' | 'Player 2';

export interface ImageItem {
  id: string;
  name: string;
  url: string;
  imageData?: ImageData;
}

export interface ImageCategory {
  id: string;
  name: string;
  description: string;
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
