/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-josefin-sans)", "sans"],
        alata: ["var(--font-alata)"],
      },
      letterSpacing: {
        widest: "0.3em",
      },
      colors: {
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('/images/fylo/logo-dark-mode.svg')",
        "logo-light-mode": "url('/images/fylo/logo-light-mode.svg')",
        "curvy-dark-mode": "url('/images/fylo/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('/images/fylo/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    backgroundImage: ['dark']
  },
  plugins: [],
};
