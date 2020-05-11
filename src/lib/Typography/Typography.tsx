import React from "react";
import { Title, SubTitle } from "./Typography.styles";

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
    default:
      return <Title kind={kind || "light"}>{children}</Title>;
  }
};

export { PITypography as Typography };
