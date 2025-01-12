/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        content: "calc(100vh - 3.5rem)",
      },
    },
  },
  plugins: [],
};
