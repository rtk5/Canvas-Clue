import React from 'react';
import { X } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPieceId: number;
  onSubmit: (answer: string) => void;
}

export function Dialog({ isOpen, onClose, selectedPieceId, onSubmit }: DialogProps) {
  const [input, setInput] = React.useState('');

  if (!isOpen) return null;

  const getPieceInfo = (id: number) => {
    switch (id) {
      case 1:
        return "This section shows the sky. What do you observe in this part?";
      case 2:
        return "Look at the middle-upper portion. What elements stand out?";
      case 3:
        return "The lower-middle section contains interesting details. What can you spot?";
      case 4:
        return "Focus on the bottom part. What catches your attention here?";
      default:
        return "What do you observe in this section?";
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
        
        <p className="text-gray-600 mb-4">
          {getPieceInfo(selectedPieceId)}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
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