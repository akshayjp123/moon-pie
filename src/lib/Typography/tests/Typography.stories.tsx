import React from "react";
import { Typography } from "../Typography";

export default {
  title: "Typography",
};

export const Default = () => (
  <div>
    <Typography varient="title">Heading title</Typography>
    <Typography varient="subtitle">Heading title</Typography>
  </div>
);
export const Light = () => (
  <div>
    <Typography varient="title" kind="light">
      Heading title
    </Typography>
    <Typography varient="subtitle" kind="light">
      Heading title
    </Typography>
  </div>
);
export const Dark = () => (
  <div style={{ background: "black" }}>
    <Typography varient="title" kind="dark">
      Hello World
    </Typography>
    <Typography varient="subtitle" kind="dark">
      Hello World
    </Typography>
  </div>
);
