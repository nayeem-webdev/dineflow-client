/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2B85",
        accent: "#6b1b83",
        google: "#4285f4",
      },
    },
  },
  plugins: [],
};
