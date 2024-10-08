import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sky: "#C3EBFA",
        lightSky: "#EDF9Ed",
        purpuleBase: "#CFCEFF",
        lightPurpuleBase: "#F1F0FF",
        yellowBase: "#FAE27C",
        lightYellowBase: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
