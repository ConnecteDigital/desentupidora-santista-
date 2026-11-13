import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Técnico da Desentupidora Santista desentupindo rede de esgoto com máquina',
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha com sifão desmontado',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário com equipamento próprio',
  'desentupimento-de-ralo': 'Desentupimento de ralo de box com máquina de cabo flexível',
  'limpeza-de-caixa-de-gordura': 'Caixa de gordura aberta durante a limpeza',
  'desentupimento-de-coluna-de-predio': 'Desentupimento de coluna de esgoto em prédio',
  'hidrojateamento': 'Hidrojateamento de tubulação de esgoto em alta pressão',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora Santista' };
}

// true quando há pelo menos uma foto real convertida
export function temFotos() {
  return Object.keys(arquivos).length > 0;
}
