/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D1B2A",
          light: "#1B263B",
        },
        secondary: {
          DEFAULT: "#415A77",
          light: "#778DA9",
        },
        accent: "#E0E1DD",
        success: "#4CAF50",
        danger: "#F44336",
        space: {
          dark: "#000814",
          blue: "#001D3D",
          purple: "#1A1A2E",
          nebula: "#16213E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        orbit: "orbit 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
      },
      backgroundImage: {
        "space-gradient":
          "radial-gradient(ellipse at center, #001D3D 0%, #000814 50%, #000000 100%)",
        "nebula-gradient":
          "radial-gradient(ellipse at top, rgba(26, 26, 46, 0.8) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
