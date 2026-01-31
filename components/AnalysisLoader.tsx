import React, { useEffect, useState } from 'react';
import { Activity, Brain, FileHeart } from 'lucide-react';

interface AnalysisLoaderProps {
  onFinish: () => void;
}

const AnalysisLoader: React.FC<AnalysisLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  const messages = [
    "Analisando perfil...",
    "Verificando níveis hormonais estimados...",
    "Calculando compatibilidade...",
    "Gerando fórmula personalizada...",
    "Concluído!"
  ];

  useEffect(() => {
    const duration = 8000; // 8 seconds
    const intervalTime = 100;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      // Update messages based on progress
      if (newProgress < 20) setStage(0);
      else if (newProgress < 40) setStage(1);
      else if (newProgress < 60) setStage(2);
      else if (newProgress < 90) setStage(3);
      else setStage(4);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onFinish, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 relative flex justify-center">
           {/* Animated Icon */}
           <div className="relative">
             <div className="absolute inset-0 bg-rose-200 rounded-full animate-ping opacity-75"></div>
             <div className="relative bg-white p-4 rounded-full border-2 border-rose-100 shadow-xl">
                {stage === 0 && <Brain className="w-12 h-12 text-rose-500 animate-pulse" />}
                {stage === 1 && <Activity className="w-12 h-12 text-rose-500 animate-pulse" />}
                {(stage === 2 || stage === 3) && <FileHeart className="w-12 h-12 text-rose-500 animate-bounce" />}
                {stage === 4 && <ShieldCheckIcon className="w-12 h-12 text-green-500" />}
             </div>
           </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2 transition-all duration-300 min-h-[3rem]">
          {messages[stage]}
        </h2>

        <div className="w-full bg-gray-100 rounded-full h-4 mb-4 overflow-hidden border border-gray-200">
          <div 
            className="bg-gradient-to-r from-rose-400 to-rose-600 h-4 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-500">Por favor, não feche esta página.</p>
      </div>
    </div>
  );
};

// Helper icon
const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default AnalysisLoader;