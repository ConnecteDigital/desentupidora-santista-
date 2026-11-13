// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5513996861940';

const ddd = PHONE_DIGITS.slice(2, 4);
const numero = `${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`;

export const site = {
  name: 'Desentupidora Santista',
  url: 'https://desentupidorasantista.com.br',
  region: 'Baixada Santista',
  city: 'Santos',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  // Exibição em textos: (13) 99686-1940
  phoneDisplay: `(${ddd}) ${numero}`,
  // Exibição nos botões de ligar: 013 99686-1940
  phoneCall: `0${ddd} ${numero}`,
  tel: `tel:+${PHONE_DIGITS}`,
  description:
    'Desentupidora 24 horas na Baixada Santista: Santos, São Vicente, Guarujá, Praia Grande, Cubatão e região. Desentupimento de esgoto, cano, pia, vaso sanitário, ralo, caixa de gordura e limpa fossa, sem quebra-quebra e com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora Santista e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager (ex.: 'GTM-XXXXXXX'). Vazio = sem rastreamento.
export const gtmId = 'GTM-WMDD2WMM';

// Tag do Google (Google Ads). Vazio = sem a tag.
export const googleTagId = 'AW-18095883915';
