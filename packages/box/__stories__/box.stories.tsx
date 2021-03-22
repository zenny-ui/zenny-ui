import React from 'react';
import { Box } from '../src/box';

export default {
  title: 'Box',
  component: Box,
};

export const Text = () => (
  <Box p={2} margin={2} pt={3} width={['100px', '200px']} color="gray.100">
    Hello World
  </Box>
);
export const Position = () => (
  <Box width={'100px'} position="absolute" top={['20px', '40px']} left="40px">
    Hello World
  </Box>
);
export const ResponsiveProps = () => (
  <Box
    width={['100px', '200px']}
    height={['100px', '200px']}
    backgroundColor={['gray.100', 'text']}
  >
    Hello World
  </Box>
);
