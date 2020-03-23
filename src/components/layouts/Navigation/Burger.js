import React from 'react';

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

const BurgerSVG = () => {
  // main mobile function, gets called on hover

  function moveBurger() {
    const tl = new gsap.timeline({ repeat: 1, yoyo: true });
    tl.staggerTo(
      '.burger_rect',
      0.2,
      {
        scaleX: 1.25,
      },
      0.1,
    );
  }

  const burgerEventHandler = () => {
    moveBurger();
  };

  return (
    <SVG
      onMouseEnter={burgerEventHandler}
      className="burgerSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80"
      width="40"
      height="40"
    >
      <rect className="burger_rect rect1" width="100" height="10"></rect>
      <rect className="burger_rect rect2" y="30" width="100" height="10"></rect>
      <rect className="burger_rect rect3" y="60" width="100" height="10"></rect>
    </SVG>
  );
};

export default BurgerSVG;
