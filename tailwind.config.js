import { default as defaultColors } from "tailwindcss/colors"
import { createVariableColors, variableColorsPlugin } from "tailwindcss-variable-colors"
import { addDynamicIconSelectors } from "@iconify/tailwind"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  colors: createVariableColors(defaultColors),
  darkMode: ["class", "html.dark"],
  theme: {
    extend: {
      colors: {
        accent: "var(--theme-color)",
        always: defaultColors,
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    variableColorsPlugin(defaultColors)
  ],
}

export default config