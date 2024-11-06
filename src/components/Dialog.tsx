import React from 'react';
import { X } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPieceId: number;
  onSubmit: (answer: string) => void;
}

export function Dialog({
  isOpen,
  onClose,
  selectedPieceId,
  onSubmit,
}: DialogProps) {
  const [input, setInput] = React.useState('');

  if (!isOpen) return null;

  const getPieceInfo = (id: number) => {
    switch (id) {
      case 1:
        return (
          <a
            href="https://www.kaggle.com/code/kshirinshetty/notebook307b2166dc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Detective
          </a>
        );
      case 2:
        return (
          <a
            href="https://www.kaggle.com/code/creativestuffwithsam/canvas-clue-pokemon-data-analysis-challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Pokemon Data Analysis Challenge
          </a>
        );
      case 3:
        return (
          <a
            href="https://www.kaggle.com/code/sreecharanpseset/canvas-clue-location"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Location
          </a>
        );
      case 4:
        return (
          <a
            href="https://www.kaggle.com/code/ayush1272/canvas-clue-task-hip-hop-suspect?scriptVersionId=205232569"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Hip-Hop Suspect Task
          </a>
        );
      default:
        return 'Documentation not uploaded';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-2">
          Piece {selectedPieceId} Selected
        </h2>

        <p className="text-gray-600 mb-4">{getPieceInfo(selectedPieceId)}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="answer"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your answer
            </label>
            <input
              id="answer"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer..."
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
}