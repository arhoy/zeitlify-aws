import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`

  width: max(100vw, 800px);
   z-index:10;
  fill: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;
  bottom:0px;




  color: ${props => props.theme.colors.white};
  }
`;

const BackgroundSvg = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 83"
  >
    <path
      d="M24,437.11l30,3.08c30,3,90,9.31,150,0,60-9.13,120-33.92,180-35.36s120,19.89,180,27.67,120,1.44,180,4.61S864,452.39,924,454s120-7.7,180-7.7,120,9.23,180,1.53,120-32.36,150-44.55L1464,391v83H24Z"
      transform="translate(-24 -391)"
    />
  </SVG>
);

export default BackgroundSvg;
