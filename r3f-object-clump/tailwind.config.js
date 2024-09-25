/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green-start': '#00ff00', // Replace with your desired start color
        'custom-green-middle': '#008000', // Replace with your desired middle color
        'custom-green-end': '#004d00', // Replace with your desired end color
      },
      backgroundImage: {
        'custom-green-gradient': 'linear-gradient(to right, #00ff00, #008000, #004d00)', // Adjust as needed
      },
    },
  },
  plugins: [],
}