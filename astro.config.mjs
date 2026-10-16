import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address of the site. Used for canonical links and the sitemap.
export default defineConfig({
  site: 'https://safir.uz',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: { uz: 'uz-UZ', ru: 'ru-RU', en: 'en-US' },
      },
    }),
  ],
});
