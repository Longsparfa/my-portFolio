/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#0F1624",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "hsl(232.7,27.3%,23.7%)",
      },
      fonts: {
        title: "Space Grotesk, sans-serif",
        main: "Space Grotesk, sans-serif"
      },
    },

    screens: {
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
    }

    // breakpoints: {
    //   sm: 'screen and (max-width: 640px)',
    //   md: 'screen and (max-width: 768px)',
    //   lg: 'screen and (max-width: 1024px)',
    //   xl: 'screen and (max-width: 1280px)'
    // }
  },
  plugins: [],
}