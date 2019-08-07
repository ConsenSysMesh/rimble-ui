import React, { useState } from 'react';
import Box from '../Box';

const useHiddenState = () => {
  const [visible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!visible);
  };

  return {
    visible,
    toggle,
  };
};

const Hidden = ({ children, visible }) => (
  <Box display={!visible ? 'none' : null} children={children} />
);

export { useHiddenState };

export default Hidden;
