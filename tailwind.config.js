/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "c-from-scissors-gradient": "hsl(39, 89%, 49%)",
        "c-to-scissors-gradient": "hsl(40, 84%, 53%)",
        "c-from-paper-gradient": "hsl(230, 89%, 62%)",
        "c-to-paper-gradient": "hsl(230, 89%, 65%)",
        "c-from-rock-gradient": "hsl(349, 71%, 52%)",
        "c-to-rock-gradient": "hsl(349, 70%, 56%)",
        "c-from-lizard-gradient": "hsl(261, 73%, 60%)",
        "c-to-lizard-gradient": "hsl(261, 72%, 63%)",
        "c-from-cyan-gradient": "hsl(189, 59%, 53%)",
        "c-to-cyan-gradient": "hsl(189, 58%, 57%)",
        "c-dark-text": "hsl(229, 25%, 31%)",
        "c-score-text": "hsl(229, 64%, 46%)",
        "c-header-outline": "hsl(217, 16%, 45%)",
        "c-from-radial-gradient": "hsl(214, 47%, 23%)",
        "c-to-radial-gradient": "hsl(237, 49%, 15%)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      backgroundImage: {
        "c-body-radial":
          "radial-gradient(circle farthest-side at 50% 0%,hsl(214, 47%, 23%),hsl(237, 49%, 15%))",
      },
    },
  },
  plugins: [],
};
