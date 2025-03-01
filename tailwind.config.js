/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
      themes: ["cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk"],
  },

}