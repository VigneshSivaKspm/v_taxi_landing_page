/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
          brand: "#DC2626",
          brandDark: "#991B1B",
        },
        navy: {
          800: "#1e293b",
          900: "#0f172a",
          950: "#070d1e",
          deep: "#0B132B",
        },
        ink: {
          DEFAULT: "#0a0b12",
          800: "#12131d",
          700: "#1b1d2b",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Montserrat", "Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Poppins", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        "glow-red": "0 0 25px -5px rgba(220, 38, 38, 0.4)",
        "glow-crimson": "0 10px 30px -10px rgba(185, 28, 28, 0.5)",
        "card-soft":
          "0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)",
        "card-hover":
          "0 24px 50px -12px rgba(15, 23, 42, 0.18), 0 8px 16px -8px rgba(225, 29, 72, 0.15)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(225,29,72,0.12), transparent 70%)",
        "mesh-light":
          "radial-gradient(at 15% 20%, rgba(244,63,94,0.10) 0px, transparent 50%), radial-gradient(at 85% 10%, rgba(245,158,11,0.10) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(15,23,42,0.05) 0px, transparent 50%)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        marquee: "marquee-scroll 26s linear infinite",
        "gradient-pan": "gradient-pan 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "marquee-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "220% 50%" },
        },
      },
    },
  },
  plugins: [],
};
