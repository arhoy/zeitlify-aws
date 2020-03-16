import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`

  width: max(100vw, 1000px);
   z-index:1;
  fill: ${props => props.theme.colors.white};
  position: absolute;
  top: -2rem;
  left:0;



  color: ${props => props.theme.colors.white};
  }
`;

const BackgroundSvgTop = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 119.58"
  >
    <path
      d="M0,99.21V.42H1440V99.21a3127.28,3127.28,0,0,0-720,0Q587.5,112.4,521.26,115.83,440.64,120,360,120A3135.07,3135.07,0,0,1,0,99.21Z"
      transform="translate(0 -0.42)"
    />
  </SVG>
);

export default BackgroundSvgTop;
