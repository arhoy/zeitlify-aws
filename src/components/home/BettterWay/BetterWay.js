import React from 'react';

import styled from '@emotion/styled';
import { Card } from './Card';
import { H2 } from '../../reusableStyles/typography/Typography';
import BackgroundSvg from './BackgroundSvg';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';

const Section = styled.div`
  position: relative;
  padding: 8rem 2rem;

  color: ${props => props.theme.colors.white};
  background: linear-gradient(
    135deg,
    rgba(9, 22, 48, 1) 5%,
    rgba(9, 22, 48, 1) 24%,
    rgba(57, 51, 97, 1) 82%,
    rgba(65, 55, 105, 1) 91%,
    rgba(65, 55, 105, 1) 100%
  );

  width: 100%;
`;

const H2Centered = styled(H2)`
  text-align: center;
  color: inherit;
  font-weight: bold;
  font-size: 4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
`;

const ButtonContainer = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
  z-index: 10;
  font-size: 2.3rem;
`;

export const BetterWay = () => {
  return (
    <Section>
      <H2Centered> A Better Way to Automate </H2Centered>
      <Container>
        <Card
          title="A single entity"
          blurb="Get all the tools you need to deploy and manage your site. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow."
        />
        <Card
          title="A single entity"
          blurb="Get all the tools you need to deploy and manage your site. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow."
        />
        <Card
          title="A single entity"
          blurb="Get all the tools you need to deploy and manage your site. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow."
        />
      </Container>
      <ButtonContainer>
        <Button>Get Started Today</Button>
      </ButtonContainer>

      <BackgroundSvg />
    </Section>
  );
};
