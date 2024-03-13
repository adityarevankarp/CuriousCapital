/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        39: "10rem",
      },
      screens: {
        xxs: { min: "0px", max: "320px" },
        xs: { min: "321px", max: "375px" },
        s: { min: "376px", max: "425px" },
        ssm: { min: "426px", max: "640px" },
        "3xl": "1440px",
        "4xl": "1920px",
        imac: "4480px",
      },

      margin: {
        74: "10rem",
        76: "12rem",
        78: "14rem",
        80: "16rem",
        82: "18rem",
        84: "20rem",
        86: "22rem",
        88: "24rem",
        90: "26rem",
        92: "28rem",
        94: "30rem",
        96: "32rem",
        98: "34rem",
        100: "36rem",
        150: "80rem",
        180: "115rem",
        '-full': '-100%',
        '-px': '-1px',
        '-0.5': '-0.125rem',
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-32': '-8rem',
        '-40': '-10rem',
        '-48': '-12rem',
        '-56': '-14rem',
        '-64': '-16rem',
      },
    },
  },
  
  plugins: [],
 
};
