import styled from 'styled-components';

const BaseLineGrid = styled.div`
  position: absolute;
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  pointer-events: none;
  background: repeating-linear-gradient(
    salmon, salmon 0.5rem,
    white 0.5rem, white 1rem
    );
`;

export default BaseLineGrid;
