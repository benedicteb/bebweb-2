import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Oxygen", "mono"],
  bodyFontFamily: ["Oxygen", "mono"],
});

typography.injectStyles();

export default typography;
