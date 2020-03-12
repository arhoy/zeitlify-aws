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
      <Title>Our Story</Title>
      <Subtitle>Divide and Conquer</Subtitle>
      <Blurb>
        <p>
          In commodo proident enim occaecat do aliqua sit velit incididunt.
          Magna ea quis anim nisi ex aute cillum. Minim officia sunt officia ut.
          Esse consectetur incididunt
        </p>
        <p>
          Laboris reprehenderit magna incididunt reprehenderit magna consequat.
          Exercitation tempor aute quis mollit. Ad dolore et laboris mollit
          laboris non ea id.
        </p>
        <p>
          Tempor aliquip eu deserunt. Sit minim ipsum eiusmod aute cillum quis
          adipisicing et do. Qui sint culpa nisi laborum consequat anim dolor
          nisi occaecat irure.
        </p>
      </Blurb>
    </Container>
  );
};
