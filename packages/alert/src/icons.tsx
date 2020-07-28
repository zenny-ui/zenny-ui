import React from "react";
import {
  FiXOctagon,
  FiCheckCircle,
  FiFlag,
  FiMessageCircle,
} from "react-icons/fi";
import { SVG } from "zenny-ui-svg";

export const DangerIcon = () => <SVG as={FiXOctagon} appearance="danger" />;
export const WarningIcon = () => <SVG as={FiFlag} strokeColor="warning" />;
export const MessageIcon = () => (
  <SVG as={FiMessageCircle} strokeColor="message" />
);
export const SuccessIcon = () => (
  <SVG as={FiCheckCircle} strokeColor="success" />
);
