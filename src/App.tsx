import React, { useState } from 'react';
import { PuzzleImage } from './components/PuzzleImage';
import { AnswerForm } from './components/AnswerForm';

function App() {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted answer:', answer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-[70%] max-w-4xl space-y-8">
        <PuzzleImage />
        <AnswerForm 
          answer={answer}
          setAnswer={setAnswer}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;