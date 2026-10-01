// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Endereço canônico: o sem www. O www existe e redireciona para cá (308), por
  // isso o sitemap e as tags canonical têm que apontar para o apex — declarar o
  // www seria mandar o buscador a um endereço que só redireciona.
  site: 'https://adecac.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // CSS em arquivo compartilhado (em vez de embutido em cada página):
  // as 11 páginas passam a reusar o mesmo cache em produção.
  build: { format: 'directory', inlineStylesheets: 'never' },
});
