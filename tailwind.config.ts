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
        section: "#0f051d",
      },
      backgroundImage: {
        gradiant: "linear-gradient(0deg,#0f051d 30%,#130749 70%)",
        "text-gradiant": "linear-gradient(25deg,#2600fc,#ff00ea)",
      },
      animation: {
        "bounce-slow": "bounce 1.5s linear infinite",
      },
      boxShadow: {
        navShadow: "0 10px 5px 0 rgba(0,0,0,.16)",
      },
      screens: {
        xms: "400px",
        ms: "500px",
        xs: "600px",
        sm: "850px",
        md: "1000px",
        lg: "1150px",
      },
      transitionProperty: {
        "font-size": "font-size",
      },
    },
  },
  plugins: [],
};
export default config;
