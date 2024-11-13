import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_background: "var(--color-main-background)",

        primary_100: "var(--color-primary_100)",
        primary_90: "var(--color-primary_90)",
        primary_80: "var(--color-primary_80)",
        primary_70: "var(--color-primary_70)",
        primary_60: "var(--color-primary_60)",
        primary_50: "var(--color-primary_50)",
        primary_40: "var(--color-primary_40)",
        primary_30: "var(--color-primary_30)",
        primary_20: "var(--color-primary_30)",
        primary_10: "var(--color-primary_10)",

        secondary_100: "var(--color-secondary_100)",
        secondary_90: "var(--color-secondary_90)",
        secondary_80: "var(--color-secondary_80)",
        secondary_70: "var(--color-secondary_70)",
        secondary_60: "var(--color-secondary_60)",
        secondary_50: "var(--color-secondary_50)",
        secondary_40: "var(--color-secondary_40)",
        secondary_30: "var(--color-secondary_30)",
        secondary_20: "var(--color-secondary_20)",
        secondary_10: "var(--color-secondary_10)",

        night_100: "var(--color-night_100)",
        night_90: "var(--color-night_90)",
        night_80: "var(--color-night_80)",
        night_70: "var(--color-night_70)",
        night_60: "var(--color-night_60)",
        night_50: "var(--color-night_50)",
        night_40: "var(--color-night_40)",
        night_30: "var(--color-night_30)",
        night_20: "var(--color-night_20)",
        night_10: "var(--color-night_10)",

        action_go: "var(--color-action-go)",
        action_stop: "var(--color-action-stop)",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
};
