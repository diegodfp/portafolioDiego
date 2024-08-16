import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#44CCEE",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(68, 204, 238, 0.5) -5.91%, rgba(205, 244, 254, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
