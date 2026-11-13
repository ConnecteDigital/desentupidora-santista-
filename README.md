# Desentupidora Santista · site

Site de desentupidora 24h na Baixada Santista, com foco em SEO local e Google Ads. Feito com [Astro](https://astro.build), gera páginas estáticas e é publicado na Vercel. Sem animação de abertura: o site abre direto no conteúdo.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, domínio, GTM | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Cidades atendidas | `src/data/bairros.ts` |
| Fotos reais | `fotos/<serviço>/` (ver `fotos/README.md`) |
| Posts do blog | `src/content/blog/*.md` |
| Logo | `src/components/Logo.astro` |

Cada serviço vira `/servicos/<slug>/`, cada cidade vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.

O telefone aparece como `(13) 99686-1940` nos textos e como `013 99686-1940` nos botões de ligar.
