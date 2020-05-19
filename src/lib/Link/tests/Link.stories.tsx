import React from "react";
import { storiesOf } from "@storybook/react";
import { Link } from "../Link";

const stories = storiesOf("Link", module);

stories.add("default - Light", () => (
  <Link href="https://www.google.com">This is a test link</Link>
));

stories.add("Dark", () => (
  <div style={{ background: "black" }}>
    <Link href="https://www.google.com" kind="dark">
      This is a test link
    </Link>
  </div>
));

stories.add("Light - new window", () => (
  <Link href="https://www.google.com" newWindow>
    This is a test link
  </Link>
));
