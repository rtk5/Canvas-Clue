import React from 'react';
import { PuzzleGame } from './components/PuzzleGame';
import { FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <a
        href="https://drive.google.com/drive/folders/16_kYoS7ztlLXam_H_uk7h832p2qzAi2R?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 left-4 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-gray-900"
      >
        <FileText size={20} />
        <span>Documentation</span>
      </a>
      <div className="flex items-center justify-center min-h-screen">
        <PuzzleGame />
      </div>
    </div>
  );
}

export default App;