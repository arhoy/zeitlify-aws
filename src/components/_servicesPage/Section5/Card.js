import React from 'react';
import Img from 'gatsby-image';

import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: ${props => (!props.reverse ? 'column' : 'column-reverse')};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem 2rem;
`;

const ImageContainer = styled.div`
  margin: 1rem 2rem;
`;

const Title = styled.h4`
  font-size: 2.2rem;
  line-height: 2.4rem;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const StyledImg = styled(Img)`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 20rem;
    height: 20rem;
  }
`;

export const Card = ({ reverse, fluid, title, children }) => {
  if (reverse) {
    return (
      <Container reverse={reverse}>
        <ContentContainer>
          <Title>{title}</Title>
          {children}
        </ContentContainer>
        <ImageContainer>
          <StyledImg fluid={fluid} />
        </ImageContainer>
      </Container>
    );
  } else {
    return (
      <Container reverse={reverse}>
        <ImageContainer>
          <StyledImg fluid={fluid} />
        </ImageContainer>
        <ContentContainer>
          <Title>{title}</Title>
          {children}
        </ContentContainer>
      </Container>
    );
  }
};
