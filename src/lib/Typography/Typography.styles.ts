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
  text-transform: ${BaseTheme.title.textTransform};
`;

export const SubTitle = styled.h2<TypoProps>`
  color: ${(props: TypoProps) =>
    props.kind === "light" ? BaseTheme.text.primary : BaseTheme.text.secondary};
  font-family: ${BaseTheme.subTitle.fontFamily};
  font-size: ${BaseTheme.subTitle.fontSize};
  font-weight: ${BaseTheme.subTitle.fontWeight};
  text-transform: ${BaseTheme.subTitle.textTransform};
`;
