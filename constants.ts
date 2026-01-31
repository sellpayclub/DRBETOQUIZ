import { Question } from './types';

export const ASSETS = {
  drBeto: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/dr%20beto.png",
  productMockup: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/MOCKUP%20LIBIDEFEM.png",
  anvisaSeal: "https://consulog.com.br/wp-content/uploads/2022/03/selo-anvisa.webp",
  warrantyPdf: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/TERMO%20GARANTIA%20LIBDFEM.pdf",
  anvisaPdf: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/DOCUMENTO%20ANVISA.pdf",
  checkoutUrl: "https://payt.site/YZyCK6d",
  clientsGroup: "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/clientes%20libdfem.jpeg"
};

export const TESTIMONIALS = [
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/1depoimentos%20libid.png",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/2depoimentos%20libid.png",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/3depoimentos%20libid.png",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/5depoimentos%20libid.png",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/6depoimentos%20libid.jpg",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/7depoimentos%20libid.jpg",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/8depoimentos%20libid.jpg",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/9depoimentos%20libid.jpg",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/10depoimentos%20libid.PNG",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/11depoimentos%20libid.PNG",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/12depoimentos%20libid.jpeg",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/cliente%20com%20libidfem.jpg",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/cliente%202.jpg"
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Qual sua faixa etária (idade)?",
    options: ["45-50 anos", "51-60 anos", "60+ anos"],
    type: "choice"
  },
  {
    id: 2,
    question: "Com que frequência você sente cansaço extremo, mesmo após uma noite de sono?",
    options: ["Raramente", "Algumas vezes na semana", "Todos os dias"],
    type: "choice"
  },
  {
    id: 3,
    question: "Você percebeu um aumento no ressecamento íntimo ou desconforto nos últimos 6 meses?",
    options: ["Sim, muito desconfortável", "Um pouco", "Não percebi"],
    type: "choice"
  },
  {
    id: 4,
    question: "Você sente que seu metabolismo 'travou' e o ganho de peso na região abdominal está difícil de controlar?",
    options: ["Sim, sinto exatamente isso", "Percebi um leve ganho de peso", "Não, meu peso está normal"],
    type: "choice"
  },
  {
    id: 5,
    question: "Em uma escala de 1 a 10, quanto a falta de desejo tem gerado um distanciamento entre você e seu parceiro?",
    options: ["1 a 3 (Pouco impacto)", "4 a 7 (Impacto moderado)", "8 a 10 (Muito impacto)"],
    type: "choice"
  },
  {
    id: 6,
    question: "Você se sente insegura ou tem receio de que a falta de intimidade esfrie o seu casamento permanentemente?",
    options: ["Sim, tenho muito medo", "Às vezes penso nisso", "Não me preocupo com isso"],
    type: "choice"
  },
  {
    id: 7,
    question: "Você já tentou usar cremes vaginais ou vitaminas comuns que não trouxeram o resultado esperado?",
    options: ["Sim, já tentei vários", "Tentei alguns", "Nunca tentei nada específico"],
    type: "choice"
  },
  {
    id: 8,
    question: "Se existisse um método natural e personalizado para reativar seu desejo e energia em poucos dias, você estaria disposta a seguir o protocolo?",
    options: ["Sim, com certeza!", "Talvez, preciso saber mais", "Não tenho interesse"],
    type: "choice"
  },
  {
    id: 9,
    question: "Você está pronta para ouvir a verdade sobre o que está acontecendo com seus hormônios agora?",
    options: ["Sim, estou pronta", "Tenho um pouco de receio", "Não sei dizer"],
    type: "choice"
  },
  {
    id: 10,
    question: "Estamos processando sua dose personalizada... Para onde devemos enviar o resultado?",
    type: "form"
  }
];