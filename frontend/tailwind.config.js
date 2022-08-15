module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/pages/**/*.ts',
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/components/**/*.ts',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'primary-label-color': 'rgba(44,82,130,1)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
