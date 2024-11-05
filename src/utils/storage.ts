export interface PuzzleAnswer {
  pieceId: number;
  answer: string;
  timestamp: string;
}

export const StorageKeys = {
  PUZZLE_ANSWERS: 'puzzle_answers'
} as const;

export function saveAnswer(pieceId: number, answer: string): void {
  const answers = getAnswers();
  
  const newAnswer: PuzzleAnswer = {
    pieceId,
    answer,
    timestamp: new Date().toISOString()
  };

  // Update or add new answer
  const index = answers.findIndex(a => a.pieceId === pieceId);
  if (index !== -1) {
    answers[index] = newAnswer;
  } else {
    answers.push(newAnswer);
  }

  localStorage.setItem(StorageKeys.PUZZLE_ANSWERS, JSON.stringify(answers));
}

export function getAnswers(): PuzzleAnswer[] {
  const stored = localStorage.getItem(StorageKeys.PUZZLE_ANSWERS);
  return stored ? JSON.parse(stored) : [];
}

export function getAnswerForPiece(pieceId: number): PuzzleAnswer | undefined {
  return getAnswers().find(answer => answer.pieceId === pieceId);
}