import React from 'react';

import styled from '@emotion/styled';
import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import {
  LinkCard1,
  LinkCard2,
  LinkCard3,
  LinkCard4,
  LinkCard5,
  LinkCard6,
} from './LinkCards';
import { H2 } from '../../reusableStyles/typography/Typography';

const CustomSection = styled(Section)`
  margin: 2rem;
  padding-left: 0;
  padding-right: 0;
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.h4`
  display: inline;
  color: ${props => props.theme.colors.black};
  opacity: 0.88;
  font-weight: 500;
  text-align: center;
  font-size: 2.2rem;
`;

export const Section3 = () => {
  return (
    <CustomSection>
      <TitleContainer>
        <Subtitle>Download. Tweak. Automate</Subtitle>
        <H2>Any Service That You'll Need</H2>
      </TitleContainer>

      <Container>
        <LinkCard1 />
        <LinkCard2 />
        <LinkCard3 />
        <LinkCard4 />
        <LinkCard5 />
        <LinkCard6 />
      </Container>
    </CustomSection>
  );
};
