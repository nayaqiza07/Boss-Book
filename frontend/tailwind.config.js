import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primary1: "var(--color-primary-1)",
        primary2: "var(--color-primary-2)",
        primary3: "var(--color-primary-2)",
        primary4: "var(--color-primary-4)",
        secondary: "var(--color-secondary)",
        secondary1: "var(--color-secondary-1)",
        secondary2: "var(--color-secondary-2)",
        secondary3: "var(--color-secondary-3)",
        secondary4: "var(--color-secondary-4)",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
};
