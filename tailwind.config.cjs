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
          900: "#131313",
        },
      },
    },
  },
  plugins: [],
};
