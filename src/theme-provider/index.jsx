import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   blue: "#0090d1",
    //   cyanProgress: "#00c3ea",
    //   darkImperialBlue: "#005075",
    //   columbiaBlue: "#c9d9e8"
    // },
    // secondary: {
    //   diamond: "#b9e6f6",
    //   azure: "#def0f7"
    // },
    // background: {
    //   whiteSmoke: "#f2f5f8",
    //   white: "#ffffff",
    //   azureishWhite: "#E4EAF0"
    // },
    // text: {
    //   yankeesBlue: "#152935",
    //   cadet: "#5a6872",
    //   quickSilver: "#9da6ad",
    //   silverSand: "#c1c1c4",
    //   gainsboro: "#d8d8d9",
    //   ghostWhite: "#FAFBFD"
    // },
    // status: {
    //   laSalleGreen: "#09822A",
    //   crayola: "#fdb927",
    //   maximumRed: "#d82829"
    // },
    // accent: {
    //   prune: "#711423",
    //   blueSapphire: "#0d6c80",
    //   maximumPurple: "#753f83",
    //   islamicGreen: "#00aa00",
    //   mediumSlateBlue: "#7745ec",
    //   rustyRed: "#da2c38",
    //   royalFuchsia: "#c53090",
    //   russianViolet: "#361d5b"
    // }
  }
});

const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
