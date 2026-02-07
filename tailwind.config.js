/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'; // <--- Importieren
export default {
  // HIER IST DIE ÄNDERUNG:
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    typography(),
  ],
}
