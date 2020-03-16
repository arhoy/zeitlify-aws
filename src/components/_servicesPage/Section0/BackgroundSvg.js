import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`

  width: max(100vw, 1000px);
   z-index:10;
  fill: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;




  color: ${props => props.theme.colors.white};
  }
`;

const BackgroundSvg = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1770 900"
  >
    <rect x="60" width="1600" height="900" style="fill: #7c72a4" />
    <polygon
      points="1017 450 599 900 1456 900 1017 450"
      style="fill: #c59b9b"
    />
    <polygon
      points="1017 450 932.9 900 1456 900 1017 450"
      style="fill: #b58080"
    />
    <polygon points="0 900 458 662 876 900 0 900" style="fill: #ea8095" />
    <polygon points="397 900 458 662 876 900 397 900" style="fill: #f8d3da" />
    <polygon
      points="1263 546 1612 900 936 900 1263 546"
      style="fill: #e97c92"
    />
    <polygon
      points="1263 546 1612 900 1222 900 1263 546"
      style="fill: #e76e85"
    />
    <polygon points="701 695 946 900 427 900 701 695" style="fill: #e25671" />
    <polygon points="647 900 701 695 946 900 647 900" style="fill: #e04765" />
    <polygon
      points="1770 900 1461 632 1156 900 1770 900"
      style="fill: #aa3088"
    />
    <polygon
      points="1770 900 1461 632 1425 900 1770 900"
      style="fill: #9d1176"
    />
    <polygon
      points="1270 900 1031 687 785 900 1270 900"
      style="fill: #9b4a9b"
    />
    <polygon
      points="1003 900 1270 900 1031 687 1003 900"
      style="fill: #b274b2"
    />
  </SVG>
);

export default BackgroundSvg;
