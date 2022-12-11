module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    extend: {
      colors: {
        baseWhite: '#f8f8f9',
        black: '#262626',
        blue: '#3942e5',
        lightblue: '#7375f8',
        'gray-10': '#515c6a',
        purple: '#5f19dd',
      },
      fontSize: {
        '11px': '11px',
        '13px': '13px',
      },
    },
  },
  variants: {},
  plugins: [],
};
