import React from 'react';
import styled from '@emotion/styled';
import { H1 } from '../reusableStyles/typography/Typography';
import { ButtonSweepToRight } from '../reusableStyles/buttons/Button';

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  margin: 0 auto;
  max-width: 60rem;
  padding: 0 2rem;
  position: relative;
`;

const HeadingContainer = styled.div``;

const Heading = styled(H1)`
  text-align: left;
  font-weight: bold;

  color: ${props => props.theme.colors.white};
  & .primary,
  & .secondary {
    display: block;
    margin-bottom: 2rem;
  }
`;

const BlurbContainer = styled.div`
  font-size: 2rem;
  font-weight: 300;
`;

const CallToActionContainer = styled.div`
  margin: 2rem 0;
`;

const CustomButton = styled(ButtonSweepToRight)`
  border-radius: 4px;
  padding: 1.4rem 2.5rem;

  color: ${props => props.theme.colors.white};
`;

export const HeroBlurb = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>
          <span className="primary"> Blazingly Fast Websites</span>
          <span className="secondary">For Modern Web Developers</span>
        </Heading>
      </HeadingContainer>
      <BlurbContainer>
        <p>
          Build, market and deploy with Zeitlify's complete package for modern
          web projects
        </p>
      </BlurbContainer>
      <CallToActionContainer>
        <CustomButton to="/"> START FREE TRIAL </CustomButton>
      </CallToActionContainer>
    </Container>
  );
};
