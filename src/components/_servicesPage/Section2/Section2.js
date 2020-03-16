import React from 'react';
import styled from '@emotion/styled';
import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import { Card1 } from './InfoCards';

const Container = styled(Container1200)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CustomSection = styled(Section)`
  padding: 0;
  margin: 0;
`;

export const Section2 = () => {
  return (
    <CustomSection>
      <Container>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </Container>
    </CustomSection>
  );
};
