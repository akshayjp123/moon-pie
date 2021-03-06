export interface GlobalTheme {
  breakpoints: Breakpoints;
  font: Font;
  text: Text;
  title: TextType;
  subTitle: TextType;
  paragraph: TextType;
  subHeader: TextType;
  hint: TextType;
}

export interface StyleProps {
  kind: string;
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
  link: string;
}

export interface TextType {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textTransform?: string;
  color?: string;
}
