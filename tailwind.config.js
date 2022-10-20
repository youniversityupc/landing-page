module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#326A8C',
          darker: '#434D59',
        },
        secondary: {
          DEFAULT: '#F2E3B3',
        },
        accent: '#F2B705',
        background: '#F2F2F2',
      },
      fontFamily: {
        inter:
          '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'inter-var':
          '"Inter var", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      transitionProperty: {
        'top': 'top',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
