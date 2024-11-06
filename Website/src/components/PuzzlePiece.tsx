import React from 'react';

interface PuzzlePieceProps {
  id: number;
  imageUrl: string;
  onClick: (id: number) => void;
  hasAnswer: boolean;
}

export function PuzzlePiece({ id, imageUrl, onClick, hasAnswer }: PuzzlePieceProps) {
  const index = id - 1;
  
  return (
    <div 
      onClick={() => onClick(id)}
      className={`h-full inline-block cursor-pointer transition-all duration-200 relative
        ${hasAnswer ? 'brightness-105' : 'hover:brightness-110'}`}
      style={{
        width: '25%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '400% 100%',
        backgroundPosition: `${-index * 100}% center`
      }}
    >
      {hasAnswer && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full 
          shadow-lg ring-2 ring-white" />
      )}
    </div>
  );
}