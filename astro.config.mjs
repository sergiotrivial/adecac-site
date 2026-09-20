// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.adecac.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // CSS em arquivo compartilhado (em vez de embutido em cada página):
  // as 11 páginas passam a reusar o mesmo cache em produção.
  build: { format: 'directory', inlineStylesheets: 'never' },
});
