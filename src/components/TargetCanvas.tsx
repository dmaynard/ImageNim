import React, { useEffect, useRef } from 'react';
import { Player } from '../types';

interface TargetCanvasProps {
  targetBuffer: Uint8Array | null;
  width: number;
  height: number;
  gameMode: 'EASY' | 'HARD';
  isVictory?: boolean;
  winningPlayer?: Player;
}

export const TargetCanvas: React.FC<TargetCanvasProps> = ({
  targetBuffer,
  width,
  height,
  isVictory,
  winningPlayer
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !targetBuffer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create ImageData from target RGBA buffer
    const clamped = new Uint8ClampedArray(targetBuffer);
    const imgData = new ImageData(clamped, width, height);
    ctx.putImageData(imgData, 0, 0);
  }, [targetBuffer, width, height]);

  const targetCardClasses = [
    'target-card',
    isVictory ? `winning-canvas ${winningPlayer === 'Player 2' ? 'win-p2' : 'win-p1'}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={targetCardClasses} id="target-canvas-card">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        id="target-canvas-element"
      />
    </div>
  );
};
