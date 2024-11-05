import React from 'react';
import { Send } from 'lucide-react';

interface AnswerFormProps {
  answer: string;
  setAnswer: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function AnswerForm({ answer, setAnswer, onSubmit }: AnswerFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="relative">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer..."
          className="w-full px-4 py-3 rounded-lg border-2 border-indigo-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 pr-12"
        />
        <button
          type="submit"
          aria-label="Quick submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-indigo-50 transition-colors duration-200"
        >
          <Send className="w-5 h-5 text-indigo-600" />
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transform transition-all duration-200 hover:shadow-lg active:scale-98"
      >
        Submit Answer
      </button>
    </form>
  );
}