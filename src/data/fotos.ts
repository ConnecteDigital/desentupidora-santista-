import type { ImageMetadata } from 'astro';

// Fotos dos serviços, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Jato de água em alta pressão desentupindo rede de esgoto',
  'desentupimento-de-pia': 'Técnico trabalhando no sifão embaixo da pia do banheiro',
  'desentupimento-de-vaso-sanitario': 'Técnico desentupindo vaso sanitário com equipamento de sucção',
  'desentupimento-de-ralo': 'Técnico desentupindo ralo com cabo flexível da máquina',
  'desentupimento-de-cano': 'Desentupimento de cano enterrado com mangueira e jato de água',
  'limpeza-de-caixa-de-gordura': 'Técnico fazendo a limpeza de caixa de gordura com mangueira de sucção',
  'limpa-fossa': 'Limpa fossa com caminhão de sucção e jato de água na tampa do esgoto',
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
