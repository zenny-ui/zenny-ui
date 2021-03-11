import React from "react";
import { SVG } from "../svg";
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

// Use `appearance` prop to theme icon "fill" with brand/state variants
export const ReactIconsAppearance = () => (
  <SVG as={FiArrowDownCircle} appearanceFill="primary" />
);

// Use `appearanceColor` prop to theme icon stroke with brand/state variants
export const ReactIconsAppearanceStroke = () => (
  <SVG as={FiArrowDownCircle} appearanceColor="primary" />
);

// Use `color` prop (combined with fill as currentcolor)
// to theme icon stroke or color with theme tokens
export const ReactIconsThemedFill = () => (
  <SVG as={FiArrowDownCircle} color="primary" fill="currentcolor" />
);
export const ReactIconsThemedStroke = () => (
  <SVG as={FiArrowDownCircle} color="primary" stroke="currentcolor" />
);

// Use `fill` prop to color icon fill with unthemed, CSS properties
export const ReactIconsFillColor = () => (
  <SVG as={FiArrowDownCircle} fill="#384930" />
);

// Use `stroke` prop to color icon stroke with unthemed, CSS properties
export const ReactIconsStrokeColor = () => (
  <SVG as={FiArrowDownCircle} stroke="#984930" />
);

// Use `stroke` prop to color icon stroke with unthemed, CSS properties
export const ReactIconsResized = () => (
  <SVG as={FiArrowDownCircle} width="48px" height="48px" />
);
