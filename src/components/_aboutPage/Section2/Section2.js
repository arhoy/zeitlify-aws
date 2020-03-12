import React from 'react';
import styled from '@emotion/styled';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import { Card } from './Card';
import { CircularImage } from './CircularImage';

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-gap: 2rem;
`;

const SubContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer2 = styled.div``;

export const Section2 = () => {
  return (
    <Section>
      <Container1000>
        <Container>
          <SubContainer1>
            <CircularImage />
          </SubContainer1>
          <SubContainer2>
            <Card />
          </SubContainer2>
        </Container>
      </Container1000>
    </Section>
  );
};
