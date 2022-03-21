module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        highRed: "#EC5863",
        offWhite: "#FAFBFD",
        grayText: "#616161",
        blueGray: "#F5F8FA",
      },
      boxShadow: {
        item: "0px 4px 18px 0px rgba(88, 126, 236, 0.18)",
      },
      transitionProperty: {
        left: "left",
      },
    },
  },
  plugins: [],
};
