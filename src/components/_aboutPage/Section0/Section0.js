import React from 'react';
import styled from '@emotion/styled';
import StyledHero2 from '../../heros/StyledHero2';
import { Section, Container800 } from '../../reusableStyles/sections/Sections';
import { H1 } from '../../reusableStyles/typography/Typography';

const StyledH1 = styled(H1)`
  text-align: center;
  font-size: 4rem;
  color: ${props => props.theme.colors.white};
`;

const CustomSection = styled(Section)`
  padding: 0;
  clip-path: polygon(
    50% 0%,
    81% 0,
    100% 0,
    100% 100%,
    75% 95%,
    50% 100%,
    25% 95%,
    0 100%,
    0 0,
    22% 0
  );
`;

export const Section0 = ({ fluid }) => {
  return (
    <CustomSection>
      <StyledHero2 img={fluid}>
        <Container800>
          <StyledH1>About Us</StyledH1>
        </Container800>
      </StyledHero2>
    </CustomSection>
  );
};
