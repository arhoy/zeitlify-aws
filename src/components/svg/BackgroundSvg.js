import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  z-index: -1;
  overflow: hidden;

  & path {
    fill: ${props => props.theme.colors.primary};
  }

  // if width is smaller than 600px do this
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 550px !important;
  }
  // if width is smaller than 1050px do this
  @media (max-width: ${props => props.theme.screenSize.oneThousandAndFifty}) {
    height: 600px;
  }

  @media (max-width: ${props => props.theme.screenSize.twoThousand}) {
    height: 700px;
  }

  // screensize that is larger than 2000 do this
  @media (min-width: ${props => props.theme.screenSize.twoThousand}) {
    width: 100vw;
  }
`;

const BackgroundSvg = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width="1367"
    height="294.22"
    viewBox="0 0 1367 294.22"
  >
    <path
      d="M-.5,228.5s538.5,144.5,683,0,683-7,683-7V-.5H-.5Z"
      transform="translate(1 1)"
    />
  </SVG>
);

export default BackgroundSvg;
