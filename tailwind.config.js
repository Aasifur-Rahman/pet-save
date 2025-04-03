/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5D2E46",
          secondary: "#E8D6CB",
          accent: "#FF9999",
          neutral: "#B58DB6",
          "base-100": "#E8D6CB",
        },
      },

      {
        myDarkTheme: {
          primary: "#E8D6CB",
          secondary: "#5D2E46",
          accent: "#FF9999",
          neutral: "#B58DB6",
          "base-100": "#5D2E46",
        },
      },
    ],
  },
};
