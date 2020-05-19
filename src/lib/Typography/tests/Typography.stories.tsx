import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography } from "../Typography";

const stories = storiesOf("Typography", module);

stories.add("default - Light", () => (
  <div>
    <Typography varient="title">Heading title</Typography>
    <Typography varient="subtitle">Subtitle Text</Typography>
    <Typography varient="subHeader">subHeader Text:</Typography>
    <Typography varient="paragraph">
      Paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </Typography>
    <Typography varient="hint">
      Hint: Paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Typography>
  </div>
));

stories.add("Dark", () => (
  <div style={{ background: "black" }}>
    <Typography varient="title" kind="dark">
      Hello World
    </Typography>
    <Typography varient="subtitle" kind="dark">
      Hello World
    </Typography>
    <Typography varient="subHeader" kind="dark">
      subHeader Text:
    </Typography>
    <Typography varient="paragraph" kind="dark">
      Paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </Typography>
    <Typography varient="hint">
      Hint: Paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Typography>
  </div>
));
