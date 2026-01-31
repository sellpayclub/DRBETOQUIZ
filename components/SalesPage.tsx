import React, { useState, useEffect } from 'react';
import { ASSETS, TESTIMONIALS } from '../constants';
import { getFormattedDate } from '../utils';
import { ShieldCheck, Truck, Star, AlertTriangle } from 'lucide-react';
import { UserData } from '../types';

interface SalesPageProps {
  userData: UserData | null;
}

const SalesPage: React.FC<SalesPageProps> = ({ userData }) => {
  // Config: 375 seconds = 6 minutes and 15 seconds.
  const DELAY_SECONDS = 375; 
  const [timePassed, setTimePassed] = useState(0);
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    // Re-define the custom element just in case to ensure it works on this page load
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

    const timer = setInterval(() => {
      setTimePassed(prev => {
        if (prev >= DELAY_SECONDS) {
          setShowOffer(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const userName = userData?.name ? userData.name.split(' ')[0] : 'Você';

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Header Warning */}
      <div className="bg-yellow-400 text-yellow-900 text-center py-2 px-2 text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-50 shadow-sm">
        <AlertTriangle className="w-4 h-4" />
        REVELAÇÃO IMPORTANTE ABAIXO
      </div>

      <div className="max-w-3xl mx-auto w-full">
        
        {/* Personalized Headline Above Video */}
        <div className="px-6 py-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
               <span className="text-rose-600 uppercase block mb-2">{userName}</span>
               Seu diagnóstico está pronto e com base nas suas respostas, assista o vídeo abaixo e veja o resultado:
            </h2>
        </div>

        {/* VSL Section - Auto Play */}
        <div className="w-full px-2 md:px-6 mb-4">
           {React.createElement('lite-video-player', {
             'video-id': "29aef3fa-31aa-4d8b-9a12-7f460271b0f9",
             'aspect-ratio': "9:16",
             'base-url': "https://app.litevideo.net",
             'params': "aspectRatio=9%3A16&coverColor=%230f172a&progressSpeed=normal&progressBarHeight=8&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=huge&showTitle=true&showControls=false&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=100&progressBarColor=%23ff0000&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false"
           })}
        </div>
        
        <div className="px-4 py-2 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Assista até o final
            </p>
        </div>

        {/* DELAYED SECTION */}
        {showOffer && (
          <div className="fade-in animate-in slide-in-from-bottom-10 duration-700">
            
            {/* Offer Intro */}
            <div className="px-4 py-8 text-center bg-rose-50 border-t border-b border-rose-100 mt-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-rose-800 mb-4 leading-tight">
                SUA FÓRMULA PERSONALIZADA ESTÁ PRONTA!
              </h3>
              <p className="text-gray-800 text-lg md:text-xl font-medium mb-8 max-w-xl mx-auto leading-relaxed">
                Com base nas suas respostas em <span className="font-bold text-rose-700">30 dias</span> usando o <span className="font-bold">LibidFem</span> você vai estar <span className="bg-green-100 px-2 py-0.5 rounded text-green-800 font-bold border border-green-200">98% melhor</span>.
              </p>
              
              {/* Product Showcase */}
              <div className="flex flex-col items-center">
                <img 
                  src={ASSETS.productMockup} 
                  alt="LibidFem Frascos" 
                  className="w-full max-w-sm drop-shadow-2xl mb-8 transform hover:scale-105 transition duration-500"
                />
                
                <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-rose-100 max-w-md w-full mb-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-rose-600"></div>
                  
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
                    <span className="text-gray-500 font-medium">Tratamento para 30 dias</span>
                    <span className="text-green-700 font-bold bg-green-100 px-3 py-1 rounded-full text-sm">Recomendado</span>
                  </div>
                  
                  <div className="text-center mb-8">
                    <p className="text-gray-400 line-through text-xl mb-1">De R$ 197,00</p>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-sm text-gray-500">Por apenas</span>
                      <p className="text-6xl font-black text-gray-900 tracking-tighter">
                        89,90
                      </p>
                    </div>
                    <p className="text-rose-600 font-bold">À vista ou parcelado</p>
                  </div>

                  <a 
                    href={ASSETS.checkoutUrl}
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-6 rounded-2xl shadow-[0_10px_20px_rgba(22,163,74,0.25)] text-center transform transition hover:-translate-y-1 active:scale-95 mb-6 border-b-4 border-green-800"
                  >
                    COMPRAR AGORA
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 font-medium">
                    <Truck className="w-5 h-5 text-gray-400" />
                    <span>Entrega rápida: 3 a 5 dias</span>
                  </div>
                </div>
              </div>

              {/* Bonus / Scarcity */}
              <div className="bg-rose-100 border-2 border-rose-200 rounded-xl p-5 max-w-md mx-auto mb-10 shadow-sm">
                <p className="font-bold text-rose-900 flex items-center justify-center gap-2 text-lg">
                  <Star className="w-6 h-6 fill-rose-600 text-rose-600" />
                  BÔNUS ESPECIAL: FRETE GRÁTIS
                </p>
                <p className="text-rose-800 mt-1 font-medium">
                  Válido SOMENTE HOJE até: {getFormattedDate()}
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="px-4 py-12 bg-white">
              <h3 className="font-serif text-3xl font-bold text-center text-gray-900 mb-10">
                Mulheres reais, resultados reais
              </h3>

              {/* Clients with Product Image */}
              <div className="max-w-xl mx-auto mb-12">
                <img 
                  src={ASSETS.clientsGroup} 
                  alt="Clientes satisfeitas com LibidFem" 
                  className="w-full rounded-2xl shadow-xl border-4 border-rose-50"
                  loading="lazy"
                />
                <p className="text-center text-gray-500 text-sm mt-3 italic">
                  Milhares de frascos entregues em todo o Brasil
                </p>
              </div>
              
              {/* Image Grid */}
              <div className="columns-2 md:columns-3 gap-4 space-y-4 max-w-4xl mx-auto">
                {TESTIMONIALS.map((img, idx) => (
                  <div key={idx} className="break-inside-avoid">
                    <img 
                      src={img} 
                      alt={`Depoimento ${idx + 1}`} 
                      className="w-full rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee & Authority */}
            <div className="bg-gray-50 px-4 py-12 border-t border-gray-200">
              <div className="max-w-2xl mx-auto space-y-8">
                
                {/* Warranty */}
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="w-20 h-20 text-green-500" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Garantia Blindada de 30 Dias</h4>
                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                      Se você não sentir a diferença na sua libido, energia e disposição, nós devolvemos 100% do seu dinheiro. Sem perguntas.
                    </p>
                    <a href={ASSETS.warrantyPdf} target="_blank" rel="noreferrer" className="text-rose-600 underline font-semibold hover:text-rose-800">
                      Ver termo de garantia
                    </a>
                  </div>
                </div>

                {/* Anvisa */}
                <div className="flex flex-col items-center text-center p-6">
                  <img src={ASSETS.anvisaSeal} alt="Selo Anvisa" className="w-36 mb-6 hover:scale-105 transition duration-300" />
                  <p className="text-gray-900 font-bold text-lg mb-1">Produto 100% Natural e Seguro</p>
                  <p className="text-gray-600 mb-3">Aprovado pela ANVISA. Não possui contra-indicações.</p>
                  <a href={ASSETS.anvisaPdf} target="_blank" rel="noreferrer" className="text-gray-500 underline text-sm hover:text-gray-800">
                    Ver documento oficial
                  </a>
                </div>
              </div>
            </div>

            {/* Sticky CTA (Mobile) */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden">
              <a 
                href={ASSETS.checkoutUrl}
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-black text-lg py-4 rounded-xl animate-pulse shadow-lg"
              >
                QUERO REATIVAR MINHA LIBIDO
              </a>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-500 text-center py-10 px-6 text-sm">
              <p className="mb-3 font-semibold">Copyright © {new Date().getFullYear()} LibidFem.</p>
              <p>Todos os direitos reservados.</p>
              <p className="mt-4 text-xs opacity-70">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
            </footer>

          </div>
        )}
      </div>
    </div>
  );
};

export default SalesPage;