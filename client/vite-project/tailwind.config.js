/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cur: "#047857",
      temp: "#136450",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      wave:"#FAE7C3",
      rev:"#F9A67E",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#F3A208",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#FFFFFF",
      temp2: "#5A6D66",
      temp3: "#123036"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      atak : ["Atak", "sans-serif"],
      arial : ["Arial"]
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
