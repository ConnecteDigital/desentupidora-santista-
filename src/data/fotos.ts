import type { ImageMetadata } from 'astro';

// Fotos dos serviços, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Técnico desentupindo caixa de inspeção de esgoto com máquina de cabo rotativo',
  'desentupimento-de-pia': 'Técnico desentupindo pia de cozinha com máquina de cabo flexível',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário com equipamento próprio',
  'desentupimento-de-ralo': 'Desentupimento de ralo de box com máquina de cabo flexível',
  'limpeza-de-caixa-de-gordura': 'Técnico fazendo a limpeza de caixa de gordura com mangueira de sucção',
  'hidrojateamento': 'Hidrojateamento de canaleta e tubulação com jato de água em alta pressão',
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
