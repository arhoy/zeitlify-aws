import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const Container = styled.div`
  max-width: 30rem;

  margin: 1rem;
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    max-width: 40rem;
    margin: 2rem 1rem;
  }
`;

const Title = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Blurb = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
`;

const StyledImage = styled(Img)`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
`;

export const Card = ({ title, blurb, fixed }) => {
  return (
    <Container>
      <StyledImage fixed={fixed} />
      <Title>{title}</Title>
      <Blurb> {blurb} </Blurb>
    </Container>
  );
};
