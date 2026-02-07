// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://dpanhey.github.io',
  base: '/panhey-website',
  integrations: [tailwind(), alpinejs(),],
});