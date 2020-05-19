import React from "react";
import {
  Title,
  SubTitle,
  Paragraph,
  SubHeader,
  Hint,
} from "./Typography.styles";

interface Props {
  children: React.ReactNode;
  varient?: string;
  kind?: string;
}
const PITypography: React.FC<Props> = (props) => {
  const { children, varient, kind } = props;
  switch (varient) {
    case "title":
      return <Title kind={kind || "light"}>{children}</Title>;
    case "subtitle":
      return <SubTitle kind={kind || "light"}>{children}</SubTitle>;
    case "subHeader":
      return <SubHeader kind={kind || "light"}>{children}</SubHeader>;
    case "paragraph":
      return <Paragraph kind={kind || "light"}>{children}</Paragraph>;
    case "hint":
      return <Hint kind={kind || "light"}>{children}</Hint>;
    default:
      return <Title kind={kind || "light"}>{children}</Title>;
  }
};

export { PITypography as Typography };
