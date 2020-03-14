import React from 'react';
import styled from '@emotion/styled';
import { Section, Container800 } from '../../reusableStyles/sections/Sections';
import { ImageGrid } from './ImageGrid';
import { Card } from './Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer = styled.div``;

export const Section1 = () => {
  return (
    <Section>
      <Container800>
        <Container>
          <SubContainer>
            <Card />
          </SubContainer>
          <SubContainer>
            <ImageGrid />
          </SubContainer>
        </Container>
      </Container800>
    </Section>
  );
};
