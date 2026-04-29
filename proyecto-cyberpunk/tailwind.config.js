/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0a0a0f",
          neon: "#00ffcc",
          pink: "#ff00cc",
          purple: "#6600ff",
          gray: "#1a1a2e",
        },
      },
      fontFamily: {
        cyber: ["'Orbitron'", "monospace"],
      },
    },
  },
  plugins: [],
}