import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
`;

const Title = styled.h4`
  font-weight: bold;
  font-size: 2rem;
  margin-top: 2rem;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const Card = ({ title, url }) => {
  return (
    <Container>
      <Img src={url} />
      <Title>{title}</Title>
    </Container>
  );
};
