import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import { Alert } from "../src/alert";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => <Alert>Hello Alert</Alert>;
export const Success = () => <Alert appearance="success">Hello Alert</Alert>;
export const Danger = () => <Alert appearance="danger">Hello Alert</Alert>;
export const Warning = () => <Alert appearance="warning">Hello Alert</Alert>;
export const Message = () => <Alert appearance="message">Hello Alert</Alert>;
