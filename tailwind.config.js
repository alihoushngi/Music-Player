/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c252e",
        secondary: "#263240",
        playerColor: "f5ba22",
        textColor: "cdcbca",
        warnColor: "fd5749",
      },
    },
  },
  plugins: [],
};
