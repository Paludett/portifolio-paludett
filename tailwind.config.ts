import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f9fc",
        surface: "#ffffff",
        "surface-strong": "#eef3f8",
        ink: "#0b1220",
        body: "#4b5565",
        mono: "#697586",
        secondary: "#334155",
        edge: "#9aa8ba",
        accent: "#2563eb",
        status: "#2f9e44",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-familjen)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderColor: {
        hair: "rgba(26,26,23,.12)",
        "hair-strong": "rgba(26,26,23,.2)",
      },
    },
  },
  plugins: [],
};

export default config;
