const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffc107',

          secondary: '#7aefd4',

          accent: '#beed78',

          neutral: '#232131',

          'base-100': '#F5F5FA',

          info: '#7EBDF1',

          success: '#58E997',

          warning: '#975107',

          error: '#F76B69',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
});
