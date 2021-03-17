import React from 'react';
import {
  FiXOctagon,
  FiCheckCircle,
  FiFlag,
  FiMessageCircle,
} from 'react-icons/fi';
import { SVG } from '@zenny-ui/svg';

export const DangerIcon = () => <SVG as={FiXOctagon} color="white" />;
export const WarningIcon = () => <SVG as={FiFlag} color="white" />;
export const MessageIcon = () => <SVG as={FiMessageCircle} color="white" />;
export const SuccessIcon = () => <SVG as={FiCheckCircle} color="white" />;
