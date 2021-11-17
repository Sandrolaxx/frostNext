module.exports = {
  purge: {
      content: [
          "./src/pages/**/*.{js,ts,jsx,tsx}", 
          "./src/components/**/*.{js,ts,jsx,tsx}"
      ]
  }, 
  darkMode: "class",
  theme: {
    backgroundColor: theme => ({
     ...theme("colors"),
     "primary-color": "#56CFE1",
     "secondary-color": "#4EA8DE",
     "light-color": "#F7F7F7",
     "secondary-light-color": "#F0FFFF",
     "dark-color": "#3F3F3F",
     "secondary-dark-color": "#737380",
    }),
    textColor: theme => ({
      ...theme("colors"),
      "light-color": "#F7F7F7",
      "primary-color": "#56CFE1",
      "secondary-color": "#4EA8DE",
      "dark-color": "#737380",
    }),
    extend: {
        height: {
            "98": "470px",
            "100": "480px",
            "102": "520px",
            "104": "580px",
        },
        animation: {
          "fade-down": 'fadeDown 1s ease-in-out',
          "fade-up": 'fadeUp 1s ease-in-out',
          "fade-left": 'fadeLeft 1s',
          "fade-right": 'fadeRight 1s',
          "fade-in": 'fadeIn 3s',
          "fade-out": 'fadeOut 3s',
          "fade-in-fast": 'fadeIn 1s'
        },
        keyframes: theme => ({
            fadeDown: {
                "0%": {
                    "opacity": "0", 
                    "transform": "translateY(-25%)",
                },
                "100%": {
                    "opacity": "1",
                    "transform": "translateY(0)",
                }    
            },
            fadeUp: {
                "0%": {
                    "opacity": "0", 
                    "transform": "translateY(25%)",
                },
                "100%": {
                    "opacity": "1",
                    "transform": "translateY(0)",
                }    
            },
            fadeLeft: {
                "0%": {
                    "opacity": "0",
                    "transform": "translateX(-25%)"
                 },
                 "100%": {
                    "opacity": "1",
                    "transform": "translateX(0)"
                 }
            },
            fadeRight: {
                "0%": {
                    "opacity": "0",
                    "transform": "translateX(-25%)"
                 },
                 "100%": {
                    "opacity": "1",
                    "transform": "translateX(0)"
                 }
            },
            fadeIn: {
                "0%": {
                    "opacity":"0"
                },
                "100%": {
                    "opacity":"1"
                }
            },
            fadeOut: {
                "0%": {
                    "opacity":"1"
                },
                "100%": {
                    "opacity":"0"
                }
            }
        }),
      },
  },
  variants: {
  extend: {},
  },
  plugins: [],
}