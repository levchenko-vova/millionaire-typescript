export interface IPrizeAmountData {
  id: number;
  amount: string;
}

export interface IQuestionsData {
  id: number;
  question: string;
  correctAnswers: number[];
  answers: {
    id: number;
    version: string;
    answer: string;
    isCorrect: boolean;
  }[];
}
