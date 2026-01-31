import React from 'react';
import { UserData } from '../types';
import { AlertTriangle, XCircle, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DiagnosisPageProps {
  userData: UserData | null;
  onContinue: () => void;
}

const DiagnosisPage: React.FC<DiagnosisPageProps> = ({ userData, onContinue }) => {
  const userName = userData?.name ? userData.name.split(' ')[0].toUpperCase() : 'VOCÊ';

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center py-8 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 border border-rose-100">
        
        {/* Header - Alarming Red */}
        <div className="bg-red-600 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-800 rounded-full mb-4 shadow-inner border-2 border-red-400">
            <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h1 className="text-white font-bold font-serif text-2xl md:text-3xl leading-tight tracking-wide">
            {userName}, COM BASE NAS SUAS RESPOSTAS, IDENTIFICAMOS QUE VOCÊ TEM:
          </h1>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          
          {/* Identified Issues List */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-gray-900 uppercase text-sm md:text-base leading-snug">NÍVEIS DE HORMÔNIOS ALTERADOS</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-gray-900 uppercase text-sm md:text-base leading-snug">NÍVEIS DE ESTROGÊNIO QUASE ACABANDO</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-gray-900 uppercase text-sm md:text-base leading-snug">LIBIDO BAIXA</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-bold text-gray-900 uppercase text-sm md:text-base leading-snug">LUBRIFICAÇÃO NATURAL ACABANDO E FICANDO RESSECADA</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Potential Problems */}
          <div>
            <h3 className="text-gray-900 font-bold font-serif text-xl mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6 text-orange-500" />
              Potenciais problemas futuros:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 text-base font-medium">
                <span className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></span>
                Cansaço mais do que o normal
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-base font-medium">
                <span className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></span>
                Falta de desejo
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-base font-medium">
                <span className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></span>
                Problemas no relacionamento
              </li>
            </ul>
          </div>

          {/* Restoration Rate - Hope */}
          <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-200">
              <div className="h-full bg-green-500 w-[89%]"></div>
            </div>
            <p className="text-green-800 font-bold uppercase text-xs tracking-widest mb-2">Taxa de restauração estimada</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-black text-green-600 tracking-tighter">89%</span>
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-gray-800 font-medium text-lg leading-snug">
              de chances de voltar ao normal em até <span className="font-extrabold text-green-700 underline decoration-green-300 decoration-4">2 semanas</span>.
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onContinue}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-6 px-4 rounded-xl shadow-[0_10px_20px_rgba(22,163,74,0.2)] transform transition hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 animate-pulse border-b-4 border-green-800"
          >
            QUERO CONHECER O TRATAMENTO
            <ArrowRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default DiagnosisPage;