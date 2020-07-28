import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import { AppearanceProp, appearanceVariants } from "zenny-ui-variants";
import { Box, Assign, BoxOwnProps } from "zenny-ui-box";
import { SVG } from "zenny-ui-svg";
import { DangerIcon, WarningIcon, MessageIcon, SuccessIcon } from "./icons";

export interface StyledAlertProps
  extends Assign<React.ComponentPropsWithRef<"div">, BoxOwnProps> {
  appearance?: AppearanceProp;
}

const StyledAlert = styled(Box)<StyledAlertProps>(
  {
    appearance: "none",
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

export const Alert = ({ icon, appearance, children }: AlertProps) => {
  const getStatusIcon = (name: AppearanceProp) => {
    switch (name) {
      case AppearanceProp.DANGER:
        return DangerIcon;

      case AppearanceProp.WARNING:
        return WarningIcon;

      case AppearanceProp.SUCCESS:
        return SuccessIcon;

      case AppearanceProp.MESSAGE:
        return MessageIcon;

      default:
        return MessageIcon;
    }
  };

  // Must return a JSX Element (meaning a function that returns component)
  const StatusIcon = icon ? () => <SVG as={icon} /> : getStatusIcon(appearance);
  return (
    <StyledAlert>
      <StatusIcon />
      {children}
    </StyledAlert>
  );
};
