import { Breakpoints, Font, Text, GlobalTheme, TextType } from "./types";

const breakpoints: Breakpoints = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1366,
};

const font: Font = {
  primaryFont: '"Open Sans",sans-serif',
  secondaryFont: '"Oswald", sans-serif',
};

const text: Text = {
  hint: "#c7c7c7",
  disabled: "#6d6e71",
  primary: "#262626",
  secondary: "#ffffff",
};

const title: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "38px",
  fontWeight: "bold",
  lineHeight: "56px",
  textTransform: "UPPERCASE",
};

const subTitle: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "26px",
  fontWeight: "bold",
  lineHeight: "39px",
  textTransform: "UPPERCASE",
};

export const BaseTheme: GlobalTheme = {
  breakpoints,
  font,
  text,
  title,
  subTitle,
};
