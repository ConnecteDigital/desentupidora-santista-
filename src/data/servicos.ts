import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto 24 horas na Baixada Santista',
    resumo: 'Rede de esgoto, caixas de inspeção e tubulações principais desentupidas sem quebrar piso.',
    metaDescription:
      'Desentupimento de esgoto 24h em Santos, São Vicente, Guarujá e Praia Grande. Máquinas próprias, sem quebra-quebra e com garantia. Chame no WhatsApp.',
    icon: 'pipe',
    destaque: true,
    intro: [
      'Esgoto voltando pelo ralo, caixa de inspeção transbordando ou mau cheiro forte no quintal são sinais de que a tubulação principal está obstruída. A Desentupidora Santista atende 24 horas, inclusive fins de semana e feriados, em toda a Baixada Santista.',
      'Usamos máquinas de cabo rotativo (tipo roto-rooter) e equipamentos de alta pressão para remover gordura, raízes, areia e objetos da rede, sem abrir piso nem parede sempre que possível.',
    ],
    sinais: [
      'Água de esgoto voltando pelos ralos ou pelo vaso',
      'Caixa de inspeção cheia ou transbordando',
      'Mau cheiro de esgoto dentro de casa ou no quintal',
      'Vários pontos da casa escoando devagar ao mesmo tempo',
      'Barulho de borbulhas (gorgolejo) nos ralos',
    ],
    comoFazemos: [
      'Localizamos o trecho obstruído pelas caixas de inspeção',
      'Escolhemos o equipamento certo para o diâmetro e o tipo de tubulação',
      'Desobstruímos toda a linha até a rede pública',
      'Testamos o escoamento com água corrente e deixamos o local limpo',
    ],
    faq: [
      {
        q: 'Vocês desentopem esgoto sem quebrar o piso?',
        a: 'Na grande maioria dos casos, sim. As máquinas alcançam a obstrução por dentro da tubulação. Só indicamos abertura quando há cano quebrado ou afundado, e sempre com o seu aceite antes.',
      },
      {
        q: 'A areia da praia entope o esgoto?',
        a: 'Sim, é muito comum na Baixada Santista. Areia do banho, do chuveirinho e da lavagem de cadeiras e roupas de praia se acumula nas curvas da tubulação e, junto com gordura, forma um bloqueio duro. Removemos esse material com máquina e jato de água.',
      },
      {
        q: 'Atendem desentupimento de esgoto de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias da semana, inclusive feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia de cozinha e banheiro',
    resumo: 'Pia de cozinha com gordura, pia de banheiro, tanque e sifão entupidos resolvidos na hora.',
    metaDescription:
      'Desentupimento de pia de cozinha e banheiro na Baixada Santista. Atendimento 24h em Santos, São Vicente, Guarujá e Praia Grande, com garantia.',
    icon: 'faucet',
    destaque: true,
    intro: [
      'A pia da cozinha é o ponto que mais entope numa casa: gordura, restos de comida e borra de café se acumulam no sifão e no cano da parede até a água parar de descer.',
      'Desmontamos e limpamos o sifão, desobstruímos a tubulação até a caixa de gordura e conferimos se o problema não está mais à frente, para o entupimento não voltar na semana seguinte.',
    ],
    sinais: [
      'Água parada na cuba ou descendo muito devagar',
      'Cheiro ruim saindo do ralo da pia',
      'Água voltando no tanque quando a pia escoa',
      'Gordura acumulada visível no sifão',
    ],
    comoFazemos: [
      'Verificamos se o entupimento está no sifão, no cano da parede ou na caixa de gordura',
      'Desmontamos e limpamos o sifão',
      'Desobstruímos a tubulação com máquina adequada ao diâmetro do cano',
      'Testamos o escoamento e damos dicas para evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Não recomendamos. A soda pode até abrir um caminho na gordura, mas costuma endurecer o resto, danificar canos e sifões de plástico e causar queimaduras. O mais seguro é a desobstrução mecânica.',
      },
      {
        q: 'Vocês trocam o sifão se estiver quebrado?',
        a: 'Se o sifão estiver trincado ou ressecado, avisamos e, com o seu aceite, fazemos a troca na mesma visita.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário 24h',
    resumo: 'Vaso que não desce, transborda ou volta água, desentupido sem retirar a louça na maioria dos casos.',
    metaDescription:
      'Desentupimento de vaso sanitário 24 horas em Santos e Baixada Santista. Sem quebrar, com equipamento próprio e garantia. Chame no WhatsApp ou ligue.',
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido é emergência: ninguém consegue esperar até o dia seguinte. Atendemos 24 horas em toda a Baixada Santista.',
      'Na maioria dos casos resolvemos com equipamento próprio para louças, sem precisar retirar o vaso do lugar. Quando o entupimento está mais à frente, na tubulação ou na caixa de inspeção, seguimos até encontrar e remover a obstrução.',
    ],
    sinais: [
      'Água subindo até a borda ao dar descarga',
      'Descarga que demora para esvaziar o vaso',
      'Água voltando no ralo do box ao dar descarga',
      'Objeto caiu dentro do vaso (brinquedo, celular, escova)',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está na louça ou na tubulação',
      'Desobstruímos com equipamento próprio para vaso sanitário',
      'Quando necessário, seguimos pela tubulação até a caixa de inspeção',
      'Testamos várias descargas antes de liberar',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar?',
        a: 'Na maioria dos casos, não. Só retiramos a louça quando há um objeto preso dentro dela, e sempre explicamos antes.',
      },
      {
        q: 'Lenço umedecido entope o vaso?',
        a: 'Sim. Lenço umedecido, absorvente, fio dental e cotonete não se desfazem na água e são as causas mais comuns de entupimento. Jogue sempre no lixo.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo de banheiro, box e área de serviço',
    resumo: 'Ralo do box, da área de serviço e do quintal com cabelo, areia ou sabão acumulado.',
    metaDescription:
      'Desentupimento de ralo de box, banheiro, área de serviço e quintal na Baixada Santista. Atendimento 24h, sem quebra-quebra e com garantia.',
    icon: 'drain',
    intro: [
      'Cabelo, resto de sabão, areia da praia e fiapos de roupa vão se acumulando no ralo e na caixa sifonada até o box virar uma piscina.',
      'Limpamos a caixa sifonada, desobstruímos a tubulação do ralo e verificamos se outros pontos ligados a ela também estão comprometidos.',
    ],
    sinais: [
      'Água acumulando no box durante o banho',
      'Ralo da área de serviço transbordando quando a máquina de lavar esvazia',
      'Mau cheiro saindo do ralo',
      'Ralo do quintal alagando em dia de chuva',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos a tubulação com máquina de cabo flexível',
      'Verificamos os demais ralos ligados à mesma linha',
      'Testamos o escoamento com água corrente',
    ],
    faq: [
      {
        q: 'Ralo com mau cheiro é entupimento?',
        a: 'Pode ser. Muitas vezes é sujeira acumulada na caixa sifonada ou o fecho hídrico seco. Na visita identificamos a causa e resolvemos.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de Caixa de Gordura',
    keyword: 'Limpeza e desentupimento de caixa de gordura',
    resumo: 'Retirada da gordura acumulada e desobstrução da caixa e da tubulação de entrada e saída.',
    metaDescription:
      'Limpeza de caixa de gordura em casas, prédios e restaurantes na Baixada Santista. Atendimento 24h e garantia. Chame no WhatsApp.',
    icon: 'tank',
    intro: [
      'A caixa de gordura segura a gordura da cozinha antes de ela chegar ao esgoto. Quando enche, a pia para de descer, aparece mau cheiro e a gordura começa a ir para a rede, entupindo tudo à frente.',
      'Fazemos a retirada da gordura acumulada, a limpeza da caixa e a desobstrução dos canos de entrada e saída, em casas, condomínios, restaurantes e lanchonetes.',
    ],
    sinais: [
      'Pia da cozinha descendo devagar mesmo com o sifão limpo',
      'Cheiro forte de gordura ou esgoto perto da caixa',
      'Gordura transbordando pela tampa da caixa',
      'Faz mais de seis meses que a caixa não é limpa',
    ],
    comoFazemos: [
      'Abrimos a caixa e retiramos a gordura acumulada',
      'Limpamos as paredes e a saída da caixa',
      'Desobstruímos a tubulação que vem da pia e a que segue para o esgoto',
      'Fechamos, testamos e orientamos sobre a frequência de limpeza',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Em residências, de 6 em 6 meses costuma ser suficiente. Em restaurantes e lanchonetes, a limpeza deve ser bem mais frequente, de acordo com o volume da cozinha.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    keyword: 'Hidrojateamento de tubulação e esgoto',
    resumo: 'Jato de água em alta pressão para limpar gordura, areia e incrustações de dentro dos canos.',
    metaDescription:
      'Hidrojateamento de tubulação de esgoto e gordura na Baixada Santista. Limpeza completa dos canos para o entupimento não voltar. Atendimento 24h.',
    icon: 'jet',
    intro: [
      'O hidrojateamento usa água em alta pressão para limpar a tubulação por dentro, removendo gordura endurecida, areia e incrustações que a máquina de cabo só consegue furar.',
      'É indicado para entupimentos que voltam com frequência, redes de restaurantes e condomínios, e tubulações longas.',
    ],
    sinais: [
      'O mesmo ponto entope de novo poucas semanas depois',
      'Tubulação com muita gordura endurecida',
      'Redes de restaurantes, padarias e condomínios',
      'Acúmulo de areia nas tubulações próximas à praia',
    ],
    comoFazemos: [
      'Avaliamos a tubulação e o tipo de sujeira',
      'Aplicamos o jato em alta pressão em todo o trecho',
      'Retiramos os resíduos e testamos o escoamento',
      'Orientamos sobre manutenção preventiva',
    ],
    faq: [
      {
        q: 'Hidrojateamento danifica o cano?',
        a: 'Não, quando feito com a pressão e o bico certos para cada tipo de tubulação. Avaliamos o material do cano antes de começar.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
