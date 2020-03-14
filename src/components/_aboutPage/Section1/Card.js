import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h4`
  text-align: center;
  color: ${props => props.theme.colors.grey};
`;

const Blurb = styled.div`
  text-align: center;
  & p {
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    margin: 1rem 3px;
  }
`;

export const Card = () => {
  return (
    <Container>
      <H3>Our Story</H3>
      <Subtitle>Automation Refined</Subtitle>
      <Blurb>
        <p>
          Automation redefined using perfectly aligned magnetic levitation to
          deploy bots
        </p>
        <p>
          Our mission is to make the world a better place one deploy at a time
          in a sustainable fashion
        </p>
      </Blurb>
    </Container>
  );
};
