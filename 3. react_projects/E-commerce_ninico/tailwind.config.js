/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'576',
      'sm':'768px',
      'md':'992px',
      'lg':'1200px',
      'xl':'1400px',
      '2xl':'1470px',
    },
    extend: {
      screens:{
        'xs':{'min':'576px'},
      },
      
    },
  },
  plugins: [],
}