import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
  background: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  width: 100%;
`;

const Img = styled.div`
  background: red;
  width: 100%;
  height: 100%;
`;

export const Card = () => {
  return (
    <Container>
      <Img />
      <Title>Elong Musk</Title>
    </Container>
  );
};
