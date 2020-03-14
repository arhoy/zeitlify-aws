import React from 'react';
import styled from '@emotion/styled';
import { HeroBlurb } from './HeroBlurb';
import backgroundImage from '../../../../images/svg/mywave.svg';

const BackgroundSvgContainer = styled.div`
  position: absolute;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 70vh;
  z-index: -1;
  top: 0;
  left: 0;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 60vh;
  }
`;

const HeroBlurbSection = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 8rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 0;
    align-items: flex-start;
    padding-top: 3rem;
  }
`;

export const Section0 = () => {
  return (
    <>
      <BackgroundSvgContainer />
      <HeroBlurbSection>
        <HeroBlurb />
      </HeroBlurbSection>
    </>
  );
};
