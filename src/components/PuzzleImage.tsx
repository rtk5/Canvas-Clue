import React from 'react';

export function PuzzleImage() {
  return (
    <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1516562309708-05f3b2b2c238?auto=format&fit=crop&q=80"
        alt="Abstract Puzzle"
        className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-300"
      />
    </div>
  );
}