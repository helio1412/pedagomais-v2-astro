/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#A78BFA',
        'accent-cyan': '#06B6D4',
        'neutral-dark': '#1F2937',
        'neutral-beige': '#F8F4E1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
