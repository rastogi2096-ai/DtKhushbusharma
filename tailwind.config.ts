import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0EA5E9", dark: "#0284C7", light: "#38BDF8" },
        accent: { DEFAULT: "#F59E0B" }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-4px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } }
      },
      animation: {
        fadeIn: "fadeIn .8s ease-out",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite"
      },
      borderRadius: { xl2: "1rem", "3xl": "1.5rem" }
    }
  },
  plugins: []
};
export default config;
