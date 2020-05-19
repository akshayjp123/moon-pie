import styled from "styled-components";
import { BaseTheme } from "../Theme";

interface TypoProps {
  kind: string;
}

export const Title = styled.h1<TypoProps>`
  color: ${(props: TypoProps) =>
    props.kind === "light" ? BaseTheme.text.primary : BaseTheme.text.secondary};
  font-family: ${BaseTheme.title.fontFamily};
  font-size: ${BaseTheme.title.fontSize};
  font-weight: ${BaseTheme.title.fontWeight};
  line-height: ${BaseTheme.title.lineHeight};
  text-transform: ${BaseTheme.title.textTransform};
`;

export const SubTitle = styled.h2<TypoProps>`
  color: ${(props: TypoProps) =>
    props.kind === "light" ? BaseTheme.text.primary : BaseTheme.text.secondary};
  font-family: ${BaseTheme.subTitle.fontFamily};
  font-size: ${BaseTheme.subTitle.fontSize};
  font-weight: ${BaseTheme.subTitle.fontWeight};
  line-height: ${BaseTheme.subTitle.lineHeight};
  text-transform: ${BaseTheme.subTitle.textTransform};
`;

export const SubHeader = styled.h3<TypoProps>`
  color: ${(props: TypoProps) =>
    props.kind === "light" ? BaseTheme.text.primary : BaseTheme.text.secondary};
  font-family: ${BaseTheme.subHeader.fontFamily};
  font-size: ${BaseTheme.subHeader.fontSize};
  font-weight: ${BaseTheme.subHeader.fontWeight};
  line-height: ${BaseTheme.subHeader.lineHeight};
  padding: 0px 10px;
`;

export const Paragraph = styled.p<TypoProps>`
  color: ${(props: TypoProps) =>
    props.kind === "light" ? BaseTheme.text.primary : BaseTheme.text.secondary};
  font-family: ${BaseTheme.paragraph.fontFamily};
  font-size: ${BaseTheme.paragraph.fontSize};
  font-weight: ${BaseTheme.paragraph.fontWeight};
  line-height: ${BaseTheme.paragraph.lineHeight};
  padding: 0px 10px;
`;

export const Hint = styled.p<TypoProps>`
  color: ${(props: TypoProps) =>
    props.kind === "light" ? BaseTheme.text.hint : BaseTheme.text.secondary};
  font-family: ${BaseTheme.hint.fontFamily};
  font-size: ${BaseTheme.hint.fontSize};
  font-weight: ${BaseTheme.hint.fontWeight};
  line-height: ${BaseTheme.hint.lineHeight};
  font-style: italic;
  padding: 0px 10px;
`;
