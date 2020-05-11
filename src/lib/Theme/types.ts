export interface GlobalTheme {
  breakpoints: Breakpoints;
  font: Font;
  text: Text;
  title: TextType;
  subTitle: TextType;
}

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Font {
  primaryFont: string;
  secondaryFont: string;
}

export interface Text {
  disabled: string;
  hint: string;
  primary: string;
  secondary: string;
}

export interface TextType {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  textTransform: string;
}
