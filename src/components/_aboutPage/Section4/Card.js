import React from 'react';
import Img from 'gatsby-image';

import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
  }
`;

const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  background: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  width: 100%;
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Card = ({ title, fluid }) => {
  return (
    <Container>
      <Image fluid={fluid} />
      <Title>{title}</Title>
    </Container>
  );
};
