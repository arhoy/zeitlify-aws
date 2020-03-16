import React from 'react';
import styled from '@emotion/styled';

import { Section, Container1200 } from '../../reusableStyles/sections/Sections';

import BackgroundSvgTop from './BackgroundSvgTop';
import BackgroundSvgBottom from './BackgroundSvgBottom';

import {
  LinkCard1,
  LinkCard2,
  LinkCard3,
  LinkCard4,
  LinkCard5,
  LinkCard6,
} from './LinkCards';
import { H2 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';
const CustomSection = styled(Section)`
  position: relative;

  color: ${props => props.theme.colors.white};
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary} 0%,
    rgba(127, 127, 208, 1) 39%,
    ${props => props.theme.colors.primary} 100%
  );

  width: 100%;
`;

const Container = styled(Container1200)`
  display: grid;
  grid-gap: 1rem;

  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ExtraPaddingTop = styled.div`
  width: 100%;
  height: 15rem;
`;

const ExtraPaddingBottom = styled.div`
  width: 100%;
  height: 10rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  text-align: center;
`;

const StyledH2 = styled(H2)`
  color: ${props => props.theme.colors.white};
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  text-align: center;
`;

const ContactLink = styled(NoStyleLink)`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white};
  &:hover {
    text-decoration: underline;
  }
`;

export const Section4 = () => {
  return (
    <CustomSection>
      <BackgroundSvgTop />
      <ExtraPaddingTop />
      <TitleContainer>
        <StyledH2>Bring Your Favourite CRM</StyledH2>
      </TitleContainer>

      <Container>
        <LinkCard1 />
        <LinkCard2 />
        <LinkCard3 />
        <LinkCard4 />
        <LinkCard5 />
        <LinkCard6 />
      </Container>
      <LinkContainer>
        <ContactLink>Talk to an Integration Specialist</ContactLink>
      </LinkContainer>

      <ExtraPaddingBottom />
      <BackgroundSvgBottom />
    </CustomSection>
  );
};
