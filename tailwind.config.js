/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        logoYellow: '#FFE600',
        logoRed: '#E30016',
        logoBlue: '#0028B8',
        ivory: '#FAF8F3',
        champagne: '#F4EFE4',
        butter: '#FFFDF7',
        warmGold: '#FDF4BF',
        soothingBlue: '#1D3B8B',
        soothingRed: '#C82838',
        midnight: '#16233B',
        slateText: '#2A364F',
        mutedText: '#5C6880',
        warmBorder: '#E5DEC9'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        soothing: '0 10px 30px -10px rgba(22, 35, 59, 0.08)',
        'soothing-lg': '0 20px 45px -12px rgba(29, 59, 139, 0.14)',
        'logo-badge': '0 6px 18px -4px rgba(22, 35, 59, 0.14)'
      }
    }
  },
  plugins: []
};
