import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import { AppearanceProp, appearanceVariants } from "@zenny-ui/variants";
import { Box, Assign, BoxOwnProps } from "@zenny-ui/box";
import { SVG } from "@zenny-ui/svg";
import { DangerIcon, WarningIcon, MessageIcon, SuccessIcon } from "./icons";

export interface StyledAlertProps
  extends Assign<React.ComponentPropsWithRef<"div">, BoxOwnProps> {
  appearance?: AppearanceProp;
}

const StyledAlert = styled(Box)<StyledAlertProps>(
  {
    fontFamily: "inherit",
    backgroundColor: "teal",
  },
  appearanceVariants
);

export interface AlertProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  appearance?: AppearanceProp;
}

export const Alert = ({
  icon,
  appearance = "message",
  children,
  ...rest
}: AlertProps) => {
  const getStatusIcon = (name: AppearanceProp) => {
    switch (name) {
      case "danger":
        return DangerIcon;

      case "warning":
        return WarningIcon;

      case "success":
        return SuccessIcon;

      case "message":
        return MessageIcon;

      default:
        return MessageIcon;
    }
  };

  // Must return a JSX Element (meaning a function that returns component)
  const StatusIcon = icon ? () => <SVG as={icon} /> : getStatusIcon(appearance);
  return (
    <StyledAlert appearance={appearance} {...rest}>
      <StatusIcon />
      {children}
    </StyledAlert>
  );
};
