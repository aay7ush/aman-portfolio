import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-primary": "#fff",
        "clr-secondary": "#d9d9d9",
        "clr-background": "#151515",
        "clr-accent": "#4ee1a0",
      },
    },
  },
  plugins: [],
}
export default config
