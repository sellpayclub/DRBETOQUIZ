import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { UserData } from '../types';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface QuizProps {
  onComplete: (data: UserData) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [error, setError] = useState('');

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleOptionClick = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || whatsapp.length < 8) {
      setError('Por favor, preencha seus dados corretamente para receber o diagnóstico.');
      return;
    }
    
    onComplete({
      name,
      whatsapp,
      answers
    });
  };

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center pt-6 px-4 font-sans">
      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-200 rounded-full h-3 mb-8 border border-gray-300">
        <div 
          className="bg-rose-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
          style={{ width: `${progress}%` }}
        ></div>
        <p className="text-right text-xs font-semibold text-gray-600 mt-2 uppercase tracking-wide">
          Pergunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
        </p>
      </div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-10 fade-in border border-rose-100">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
          {currentQuestion.question}
        </h2>

        {currentQuestion.type === 'choice' && (
          <div className="space-y-4">
            {currentQuestion.options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left p-5 rounded-xl border-2 border-rose-100 hover:border-rose-500 hover:bg-rose-50 transition-all duration-200 text-gray-800 font-medium text-lg flex justify-between items-center group shadow-sm active:scale-[0.98]"
              >
                {option}
                <div className="w-6 h-6 rounded-full border-2 border-rose-200 group-hover:border-rose-500 flex items-center justify-center bg-white">
                  <div className="w-3 h-3 rounded-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'form' && (
          <form onSubmit={handleFormSubmit} className="space-y-5 animate-in fade-in slide-in-from-bottom-4">
            <div>
              <label htmlFor="name" className="block text-base font-bold text-gray-800 mb-2">Seu Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition text-lg placeholder-gray-400"
                placeholder="Ex: Maria Silva"
                required
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-base font-bold text-gray-800 mb-2">Seu WhatsApp (com DDD)</label>
              <input
                type="tel"
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full p-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition text-lg placeholder-gray-400"
                placeholder="Ex: (11) 99999-9999"
                required
              />
            </div>
            
            {error && <p className="text-red-600 font-bold text-sm bg-red-50 p-3 rounded-lg border border-red-200 flex items-center gap-2"><span className="text-lg">⚠️</span> {error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-5 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] mt-4 flex items-center justify-center gap-2 transform transition hover:scale-[1.02] active:scale-95"
            >
              VER MEU RESULTADO
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-xs md:text-sm text-gray-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Seus dados estão 100% seguros e não serão compartilhados.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Quiz;