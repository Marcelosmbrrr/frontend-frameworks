/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        "card": "rgba(0, 0, 0, 0.16) 0px 1px 4px"
      },
      height: {
        "dash_card": "192px"
      },
      gridTemplateRows: {
        "min_dash": "768px 192px",
        "sm_dash": "384px 450px",
        "md_dash": "384px 450px",
        "lg_dash": "192px 450px",
        "min_dash_cards": "repeat(4, 192px)",
        "sm_dash_cards": "repeat(2, 192px)",
        "md_dash_cards": "repeat(2, 192px)",
        "lg_dash_cards": "none"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}