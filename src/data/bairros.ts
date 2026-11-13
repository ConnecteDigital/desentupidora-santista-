// Cidades atendidas na Baixada Santista. Cada uma gera /desentupidora-em-<slug>/
export type Zona = 'Santos e região central' | 'Litoral Sul' | 'Litoral Norte';

export interface Bairro {
  slug: string;
  nome: string;
  zona: Zona;
  // Texto exclusivo da página para não repetir conteúdo entre cidades
  sobre: string;
  vizinhos: string[];
}

// Regiões em foco aparecem primeiro nas listagens
export const zonasPrioritarias: Zona[] = ['Santos e região central'];
export const ordemZonas: Zona[] = ['Santos e região central', 'Litoral Sul', 'Litoral Norte'];

export const bairros: Bairro[] = [
  {
    slug: 'santos',
    nome: 'Santos',
    zona: 'Santos e região central',
    sobre:
      'Santos tem muitos prédios antigos na orla, no Gonzaga, no Boqueirão e na Ponta da Praia, além de casas e sobrados nos morros e na Zona Noroeste. Nos prédios, os chamados mais comuns são colunas de esgoto e de cozinha entupidas; nas casas, caixa de gordura cheia e esgoto com areia.',
    vizinhos: ['São Vicente', 'Guarujá', 'Cubatão'],
  },
  {
    slug: 'sao-vicente',
    nome: 'São Vicente',
    zona: 'Santos e região central',
    sobre:
      'Em São Vicente atendemos desde os prédios do Itararé e do Gonzaguinha até as casas da área continental. Areia e gordura na rede de esgoto são causas frequentes de entupimento, principalmente nas casas próximas à praia.',
    vizinhos: ['Santos', 'Praia Grande', 'Cubatão'],
  },
  {
    slug: 'guaruja',
    nome: 'Guarujá',
    zona: 'Santos e região central',
    sobre:
      'Guarujá tem muitos apartamentos de temporada na Pitangueiras, Enseada e Astúrias, que ficam fechados e entopem quando lotam no feriado. Atendemos moradores, administradoras e condomínios, inclusive em alta temporada.',
    vizinhos: ['Santos', 'Bertioga', 'Vicente de Carvalho'],
  },
  {
    slug: 'praia-grande',
    nome: 'Praia Grande',
    zona: 'Litoral Sul',
    sobre:
      'Praia Grande cresceu rápido, com muitos prédios novos na orla e casas nos bairros como Boqueirão, Guilhermina, Aviação, Tupi, Ocian e Caiçara. Desentupimos pias, ralos, vasos e redes de esgoto em casas e condomínios.',
    vizinhos: ['São Vicente', 'Mongaguá'],
  },
  {
    slug: 'cubatao',
    nome: 'Cubatão',
    zona: 'Santos e região central',
    sobre:
      'Em Cubatão atendemos residências, comércios e empresas. Além de pias e vasos, são comuns entupimentos em redes de esgoto de casas mais antigas e em cozinhas industriais.',
    vizinhos: ['Santos', 'São Vicente'],
  },
  {
    slug: 'bertioga',
    nome: 'Bertioga',
    zona: 'Litoral Norte',
    sobre:
      'Bertioga tem muitas casas de condomínio e de temporada, como em Riviera e Indaiá. Atendemos desentupimento de esgoto, ralos e caixas de gordura, inclusive antes e depois de feriados prolongados.',
    vizinhos: ['Guarujá'],
  },
  {
    slug: 'mongagua',
    nome: 'Mongaguá',
    zona: 'Litoral Sul',
    sobre:
      'Em Mongaguá a maioria dos imóveis são casas, muitas de veraneio. Entupimentos de esgoto com areia e de caixa de gordura são os chamados mais comuns.',
    vizinhos: ['Praia Grande', 'Itanhaém'],
  },
  {
    slug: 'itanhaem',
    nome: 'Itanhaém',
    zona: 'Litoral Sul',
    sobre:
      'Atendemos Itanhaém com desentupimento de pias, vasos, ralos e redes de esgoto em casas, pousadas e comércios.',
    vizinhos: ['Mongaguá', 'Peruíbe'],
  },
  {
    slug: 'peruibe',
    nome: 'Peruíbe',
    zona: 'Litoral Sul',
    sobre:
      'Em Peruíbe atendemos casas, pousadas e comércios com desentupimento de esgoto, caixa de gordura, pia e vaso sanitário.',
    vizinhos: ['Itanhaém'],
  },
];

export function bairroPath(b: Bairro) {
  return `/desentupidora-em-${b.slug}/`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}
