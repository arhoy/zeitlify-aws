import React from 'react';

import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { OurStats1, OurStats2, OurStats3, OurStats4 } from './OurStats';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: 1rem;
  max-width: ${props => props.theme.screenSize.twelveHundred};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: grid;
    justify-content: flex-start;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Section2 = () => {
  return (
    <Section>
      <Container>
        <OurStats1 />
        <OurStats2 />
        <OurStats3 />
        <OurStats4 />
      </Container>
    </Section>
  );
};
