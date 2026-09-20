// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.adecac.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
