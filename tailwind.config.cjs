/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        mainBG: "url(./src/assets/mainbg.png)",

        // games
        leagueoflegends: "url(./src/assets/games/image1.png)",
        apexlegends: "url(./src/assets/games/image2.png)",
        counterstrike: "url(./src/assets/games/image3.png)",
        warcraft: "url(./src/assets/games/image4.png)",
        dota2: "url(./src/assets/games/image5.png)",
        fortnite: "url(./src/assets/games/image6.png)",
      },
      fontFamily: {
        inter: "Inter, sans-serif;",
      },
      colors: {
        gray: {
          450: "#A1A1AA",
          900: "#131313",
        },
        magenta: {
          100: "#d4d4d6",
          200: "#aaa8ae",
          300: "#7f7d85",
          400: "#55515d",
          500: "#2a2634",
          600: "#221e2a",
          700: "#19171f",
          800: "#110f15",
          900: "#08080a",
        },
        purple: {
          100: "#ebe2ff",
          200: "#d6c5ff",
          300: "#c2a7ff",
          400: "#ad8aff",
          500: "#996dff",
          600: "#7a57cc",
          700: "#5c4199",
          800: "#3d2c66",
          900: "#1f1633"
},
      },
    },
  },
  plugins: [],
};
