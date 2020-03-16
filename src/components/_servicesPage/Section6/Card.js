import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import NoStyleLink from '../../Links/NoStyleLink';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';

const Container = styled.div`
  margin-bottom: 3rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
  display: grid;
  grid-template-columns: 12fr 4fr;
  grid-gap: 1rem;

  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
  }
`;

const ContentContainer = styled.div`
  padding: 2rem;
  height: min-content;
`;

const PictureContainer = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 28% 100%);
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: none;
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  over-flow: hidden;
  object-fit: cover;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & h4 {
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    margin: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
`;

const Subtitle = styled.h4`
  color: ${props => props.theme.colors.grey};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Blurb = styled.p`
  font-weight: 300;
  color: ${props => props.theme.colors.grey};
  width: 90%;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const Link = styled(NoStyleLink)``;

const Button = styled(ButtonSweepToRight)`
  margin-top: 1rem;
  color: ${props => props.theme.colors.white};
`;

export const Card = ({ title, subtitle, children, link, linkURL, picture }) => {
  return (
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Blurb>{children}</Blurb>
        <Link to={linkURL}>
          <Button>{link}</Button>
        </Link>
      </ContentContainer>
      <PictureContainer>
        {picture && <CardImage fluid={picture}></CardImage>}
      </PictureContainer>
    </Container>
  );
};
