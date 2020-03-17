import React from 'react';
import Img from 'gatsby-image';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: ${props => (props.reverse ? 'column' : 'column-reverse')};
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

const Blurb = styled.div`
  color: ${props => props.theme.colors.grey};
`;

const Card = ({ title, blurb, fluid, reverse }) => {
  if (reverse) {
    return (
      <Container reverse={reverse}>
        <ImageContainer>
          <StyledImg fluid={fluid} />
        </ImageContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <Blurb>{blurb}</Blurb>
        </ContentContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <ContentContainer>
          <Title>{title}</Title>
          <Blurb>{blurb}</Blurb>
        </ContentContainer>
        <ImageContainer>
          <StyledImg fluid={fluid} />
        </ImageContainer>
      </Container>
    );
  }
};

export default Card;
