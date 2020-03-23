import React, { useState } from 'react';

import styled from '@emotion/styled';

import { gsap } from 'gsap';

const SVG = styled.svg`
  & rect {
    fill: #fff;
  }
  &:hover {
    & .line-one {
      stroke: red;
    }
  }
`;

const BurgerSVG2 = () => {
  // main mobile function, gets called on hover

  const [reverse, setReverse] = useState(true);

  function moveBurger() {
    const tl = new gsap.timeline({});
    if (reverse) {
      tl.to('.burger_rect1', 0.2, {
        rotation: 45,
        transformOrigin: '50% 50%,',
        y: 30,
      })
        .to('.burger_rect2', 0.2, { scaleX: 0 })
        .to('.burger_rect3', 0.2, {
          rotation: -45,
          transformOrigin: '50% 50%',
          y: -30,
        });
    } else {
      tl.to('.burger_rect1', 0.2, {
        rotation: 0,
        transformOrigin: '50% 50%',
        y: 0,
      })
        .to('.burger_rect2', 0.2, { scaleX: 1 })
        .to('.burger_rect3', 0.2, {
          rotation: 0,
          transformOrigin: '50% 50%',
          y: 0,
        });
    }

    tl.play();

    setReverse(prev => !prev);
  }

  return (
    <SVG
      onClick={moveBurger}
      className="burgerSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80"
      width="40"
      height="40"
    >
      <rect className="burger_rect burger_rect1" width="100" height="10"></rect>
      <rect
        className="burger_rect burger_rect2"
        y="30"
        width="100"
        height="10"
      ></rect>
      <rect
        className="burger_rect burger_rect3"
        y="60"
        width="100"
        height="10"
      ></rect>
    </SVG>
  );
};

export default BurgerSVG2;
