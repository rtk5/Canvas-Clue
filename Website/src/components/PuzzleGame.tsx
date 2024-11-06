import React, { useState, useEffect } from 'react';
import { PuzzlePiece } from './PuzzlePiece';
import { Dialog } from './Dialog';
import { saveAnswer, getAnswers, type PuzzleAnswer } from '../utils/storage';

const PUZZLE_IMAGE = 'https://img-tan-three.vercel.app/images/ation.png';

export function PuzzleGame() {
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [answers, setAnswers] = useState<PuzzleAnswer[]>([]);

  useEffect(() => {
    setAnswers(getAnswers());
  }, []);

  const handlePieceClick = (id: number) => {
    setSelectedPiece(id);
    setIsDialogOpen(true);
  };

  const handleSubmit = (answer: string) => {
    if (selectedPiece) {
      saveAnswer(selectedPiece, answer);
      setAnswers(getAnswers());
    }
    setIsDialogOpen(false);
    setSelectedPiece(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 w-full">
      <div className="w-[70vw] max-w-4xl aspect-[16/9] bg-white rounded-lg shadow-2xl overflow-hidden relative">
        {[1, 2, 3, 4].map((id) => (
          <PuzzlePiece
            key={id}
            id={id}
            imageUrl={PUZZLE_IMAGE}
            onClick={handlePieceClick}
            hasAnswer={answers.some((a) => a.pieceId === id)}
          />
        ))}
      </div>

      {answers.length > 0 && (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Answers</h2>
          <div className="space-y-4">
            {answers.map((answer) => (
              <div
                key={answer.pieceId}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="font-medium text-gray-700">
                  Piece {answer.pieceId}
                </div>
                <div className="flex-1">
                  <p className="text-gray-600">{answer.answer}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {new Date(answer.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedPieceId={selectedPiece || 0}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
