export type Step = 'landing' | 'quiz' | 'analyzing' | 'diagnosis' | 'sales';

export interface Question {
  id: number;
  question: string;
  options?: string[];
  type: 'choice' | 'form';
}

export interface UserData {
  name: string;
  whatsapp: string;
  answers: Record<number, string>;
}