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
  link: "#0000EE",
};

const title: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "38px",
  fontWeight: "bold",
  lineHeight: "56px",
  textTransform: "UPPERCASE",
  color: text.primary,
};

const subTitle: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "26px",
  fontWeight: "bold",
  lineHeight: "39px",
  textTransform: "UPPERCASE",
  color: text.primary,
};

const subHeader: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "18px",
  fontWeight: "bold",
  lineHeight: "26px",
  color: text.primary,
};

const paragraph: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "normal",
  color: text.primary,
};

const hint: TextType = {
  fontFamily: font.primaryFont,
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "normal",
  color: text.hint,
};

export const BaseTheme: GlobalTheme = {
  breakpoints,
  font,
  text,
  title,
  subTitle,
  paragraph,
  subHeader,
  hint,
};
