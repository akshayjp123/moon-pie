import styled from "styled-components";
import { StyleProps } from "../Theme/types";
import { BaseTheme } from "../Theme";

export const Link = styled.a<StyleProps>`
  color: ${(props: StyleProps) =>
    props.kind === "light" ? BaseTheme.text.link : BaseTheme.text.secondary};
  font-family: ${BaseTheme.hint.fontFamily};
  font-size: ${BaseTheme.hint.fontSize};
  font-weight: ${BaseTheme.hint.fontWeight};
  line-height: ${BaseTheme.hint.lineHeight};
  font-style: italic;
`;
