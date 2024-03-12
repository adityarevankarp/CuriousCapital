/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px', // Define a new breakpoint
        '4xl': '1920px',
        'imac': '4480px' // Define another new breakpoint
        // You can add as many custom breakpoints as needed
      },
      margin: {
        '74':'10rem',
        '76':'12rem',
        '78':'14rem',
        '80':'16rem',
        '82': '18rem', // Add your custom margin value
        '84': '20rem',
        '86': '22rem',
        '88': '24rem',
        '90': '26rem',
        '92': '28rem',
        '94':'30rem',
        '96':'32rem',
        '98':'34rem',
        '100':'36rem',
        '150':'80rem',
        '180':'115rem'
         // Add another custom margin value
        // You can add as many custom margin values as you need
      }
    },
  },
  plugins: [],
}