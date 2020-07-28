import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import { SVG } from "../src/svg";
import { FiArrowDownCircle } from "react-icons/fi";

export default {
  title: "SVG",
  component: SVG,
};

export const HardcodedSVG = () => (
  <SVG stroke="teal">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </SVG>
);

// Pass any React SVG component to wrap it in our theming utilities
export const ReactIcons = () => <SVG as={FiArrowDownCircle} />;

// Use `appearance` prop to color icon "fill"
export const ReactIconsAppearance = () => (
  <SVG as={FiArrowDownCircle} appearance="primary" />
);

// Use `strokeColor` prop to color icon stroke
export const ReactIconsStrokeColor = () => (
  <SVG as={FiArrowDownCircle} strokeColor="primary" />
);
