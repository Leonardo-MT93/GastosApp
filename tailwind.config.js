/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-line': "#E3C012",
        'buttons': "#F0D343",
        'text': "#F0D343",
        'background': "#1C1802",
        'buttons-text': "#1C1802",
        'buttons-border': "#AA900E",
        'buttons-hover': "#F3DC68",
        'buttons-active': "#F0D343",
        'buttons-disabled': "#AA900E",	
      }
    },
  },
  plugins: [],
}