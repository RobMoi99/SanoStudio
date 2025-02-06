/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        italiana: ["var(--font-italiana)", "serif"],
      },
      screens: {
        'utxl': { 'max': '1423px' },
        'utlg': { 'max': '1023px' },
        'utmd': { 'max': '767px' },
        'utsm': { 'max': '639px' },
        'utxs': { 'max': '479px' },
        'xs': { 'min': '480px' },
        '2xl': { 'min': '1536px' },       // Larger screens, starting at 1536px
        '3xl': { 'min': '1920px' },       // Very large screens, 1920px and above
        '4xl': { 'min': '2560px' },       // Ultra-wide screens, 2560px and above
      },
     
    },
  },
  plugins: [],
};
