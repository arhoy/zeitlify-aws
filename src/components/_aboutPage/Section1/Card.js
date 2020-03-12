import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
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
      <Title>About Us</Title>
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
