import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const Blurb = styled.p`
  font-weight: 300;
`;

export const Card = ({ title, blurb }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Blurb> {blurb} </Blurb>
    </Container>
  );
};
