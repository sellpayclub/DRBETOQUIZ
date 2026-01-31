import React, { useEffect } from 'react';
import { ASSETS } from '../constants';
import { ArrowRight, Lock } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {

  useEffect(() => {
    // Define the custom element for the video player
    if (!customElements.get("lite-video-player")) {
      customElements.define("lite-video-player", class extends HTMLElement {
        connectedCallback() {
          const t = this.getAttribute.bind(this);
          const a = t("video-id") || "";
          const r = t("base-url") || "";
          const i = t("aspect-ratio") || "16:9";
          const s = t("params") || "";
          
          let o = "16/9";
          if (i === "square") o = "1/1";
          else if (i.includes(":")) o = i.replace(":", "/");
          else o = i;

          const shadow = this.attachShadow({ mode: "open" });
          shadow.innerHTML = `
            <style>
              :host { display: block; max-width: 1280px; margin: auto; }
              .v { position: relative; width: 100%; aspect-ratio: ${o}; overflow: hidden; border-radius: 12px; background: #000; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); }
              iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
            </style>
            <div class="v">
              <iframe src="${r}/embed/${a}?${s}" loading="lazy" allowfullscreen allow="autoplay"></iframe>
            </div>
          `;
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header Warning - Destacado em Vermelho Forte */}
      <div className="w-full bg-rose-700 text-white text-center py-3 px-4 text-xs md:text-sm font-bold uppercase tracking-widest shadow-md z-10 sticky top-0">
        Atenção: Vídeo restrito para mulheres 45+
      </div>

      <div className="max-w-2xl w-full px-6 py-8 flex flex-col items-center text-center">
        
        {/* Main Headline - Tipografia Profissional e Impactante */}
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          <span className="text-rose-700 block mb-3 text-xl md:text-2xl font-sans font-extrabold tracking-wide uppercase border-b-2 border-rose-100 pb-2 mx-auto w-fit">
            Dr. Beto revela:
          </span>
          O "Interruptor de Libido Feminina" que desliga nas mulheres após os 45 anos
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed font-normal">
          (e como reativá-lo em <span className="font-bold text-gray-800">30 segundos</span> com uma fórmula personalizada).
        </p>

        {/* Video Player */}
        <div className="w-full max-w-[350px] md:max-w-[400px] mb-8 shadow-2xl rounded-xl border-4 border-white">
           {React.createElement('lite-video-player', {
             'video-id': "1b32d1d8-2b84-4614-9a2d-0fff05325db6",
             'aspect-ratio': "9:16",
             'base-url': "https://app.litevideo.net",
             'params': "aspectRatio=9%3A16&coverColor=%230f172a&progressSpeed=normal&progressBarHeight=8&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=huge&showTitle=true&showControls=false&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=100&progressBarColor=%23ff0000&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false"
           })}
        </div>

        {/* Primary CTA Button - Botão de Alta Conversão */}
        <button 
          onClick={onStart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl py-6 px-6 rounded-2xl shadow-[0_10px_20px_rgba(22,163,74,0.3)] transform transition hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mb-8 animate-pulse border-b-4 border-green-800"
        >
          INICIAR DIAGNÓSTICO
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Free Badge */}
        <div className="mb-12 inline-flex items-center gap-2 bg-green-50 text-green-800 px-6 py-2 rounded-full border border-green-200 shadow-sm">
          <Lock className="w-4 h-4 text-green-600" />
          <span className="font-bold text-xs md:text-sm tracking-wide uppercase">GRÁTIS • Leva apenas 60 segundos</span>
        </div>

        {/* Hook Box - Elemento de Persuasão */}
        <div className="w-full bg-rose-50 border border-rose-200 p-6 mb-12 rounded-2xl shadow-sm text-center">
          <p className="text-rose-900 font-serif text-xl md:text-2xl font-bold italic leading-relaxed">
            "Faça o teste de 1 minuto agora mesmo para receber seu diagnóstico de equilíbrio hormonal e lubrificação natural."
          </p>
        </div>

        {/* Authority Element */}
        <div className="flex flex-col items-center mb-12 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg w-full max-w-sm">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
            <img 
              src={ASSETS.drBeto} 
              alt="Dr. Beto" 
              className="w-full h-full rounded-full object-cover border-4 border-rose-50 shadow-md"
            />
            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white" title="Online"></div>
          </div>
          <p className="text-xl text-gray-900 font-bold uppercase tracking-wide mb-1">
            Dr. Beto
          </p>
          <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
            Especialista em saúde integrativa
          </p>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;