import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "otlob-charcoal": "#111416",
        "otlob-ash": "#15191c",
        "otlob-amber": "#ffb353",
        "otlob-rose": "#fe6b72",
        "otlob-emerald": "#32d0a4",
        "otlob-cloud": "#f5f7fa"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-clash-display)"]
      },
      boxShadow: {
        ambient: "0 12px 40px rgba(10, 13, 18, 0.25)",
        focus: "0 0 0 1px rgba(255, 179, 83, 0.5)"
      },
      borderRadius: {
        xl: "1.25rem"
      },
      backgroundImage: {
        "radial-light": "radial-gradient(120% 120% at 50% 0%, rgba(255, 179, 83, 0.25), transparent 65%)"
      }
    }
  },
  plugins: []
};

export default config;
