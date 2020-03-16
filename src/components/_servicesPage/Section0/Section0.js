import React from 'react';

import styled from '@emotion/styled';
import { Section } from '../../reusableStyles/sections/Sections';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H1 } from '../../reusableStyles/typography/Typography';
import background from '../../../../images/svg/mountainbcg.svg';

const CustomSection = styled(Section)`
  background: linear-gradient(
      180deg,
      ${props => props.theme.colors.primary} 0%,
      rgba(127, 127, 208, 0.65) 39%,
      white 100%
    ),
    url(${background});
  background-size: contain;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    background-size: cover;
    background-position: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
`;

const CustomH1 = styled(H1)`
  color: inherit;
  text-align: center;
`;

const Blurb = styled.div`
  text-align: center;
  font-weight: 300;
  margin-top: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
`;

export const Section0 = () => {
  return (
    <CustomSection>
      <Container>
        <CustomH1>Zeitlify Services</CustomH1>
        <Blurb>Deploy blazingly fast automation to you every day tasks</Blurb>
      </Container>
      <ButtonContainer>
        <Button> Get Started Today </Button>
      </ButtonContainer>
    </CustomSection>
  );
};
