import React from 'react';
import styled from '@emotion/styled';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';
import { H2 } from '../../reusableStyles/typography/Typography';
import { SectionWhiteToGrey } from '../../reusableStyles/sections/Sections';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 1rem 0;
  }
`;

const Title = styled(H2)`
  font-size: 4rem;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: 3rem;
`;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
  font-size: 2.2rem;
  font-weight: bold;
`;

export const Section8 = () => {
  return (
    <SectionWhiteToGrey>
      <Container>
        <Title>Give us a Try</Title>
        <Subtitle> Automate Your Workflow Instantly</Subtitle>
        <Button> Get Started For Free</Button>
      </Container>
    </SectionWhiteToGrey>
  );
};
