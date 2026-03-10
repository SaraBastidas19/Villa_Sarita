/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bosque: '#1F4D3B',
        hoja: '#3B7F58',
        tierra: '#8C5A3C',
        crema: '#F8F4EC'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31, 77, 59, 0.12)'
      }
    }
  },
  plugins: []
};
