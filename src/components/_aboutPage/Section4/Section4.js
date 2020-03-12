import React from 'react';

import styled from '@emotion/styled';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';
import { Card } from './Card';
import { H2 } from '../../reusableStyles/typography/Typography';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';

const Container = styled(Container1000)`
  display: flex;
  justify-content: center;
`;

const StyledH2 = styled(H2)`
  text-align: center;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

const Button = styled(ButtonSweepToRight)`
  display: inline-block;
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
`;
export const Section4 = () => {
  return (
    <Section>
      <StyledH2> Our Three Pillars of Automation</StyledH2>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
      <ButtonContainer>
        <Button>Read More</Button>
      </ButtonContainer>
    </Section>
  );
};
