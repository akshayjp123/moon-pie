import React from "react";
import { Link } from "./Link.styles";

interface Props {
  children: React.ReactNode;
  href: string;
  kind?: string;
  newWindow?: boolean;
}
const PILink: React.FC<Props> = (props) => {
  const { children, kind, href, newWindow } = props;
  return (
    <Link
      kind={kind || "light"}
      href={href}
      target={newWindow ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
};

export { PILink as Link };
