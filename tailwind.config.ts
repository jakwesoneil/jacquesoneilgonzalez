// Import required modules from Tailwind CSS
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
import type { Config } from "tailwindcss";

// Tailwind CSS configuration
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DEFAULT: '#000',
        100: '#000319',
        900: '#000080',
        // Include any additional colors or overrides here
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Custom plugin to add CSS variables for colors
function addVariablesForColors({ addBase, theme }: { addBase: Function, theme: Function }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
