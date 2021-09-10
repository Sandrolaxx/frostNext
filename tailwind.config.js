module.exports = {
  purge: {
      content: [
          './src/pages/**/*.{js,ts,jsx,tsx}', 
          './src/components/**/*.{js,ts,jsx,tsx}'
      ]
  }, 
  darkMode: false,
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary-color': '#56cfe1',
     'primary-color-hover': '#4ea8de',
     'secondary-color': '#4ea8de',
     'light-color': '#f7f7f7',
     'secondary-light-color': '#f0ffff',
     'dark-color': '#3f3f3f',
     'secondary-dark-color': '#737380',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'light-color': '#f7f7f7',
      'primary-color': '#56cfe1',
      'primary-color-hover': '#4ea8de',
    })
  },
  variants: {
  extend: {},
  },
  plugins: [],
}