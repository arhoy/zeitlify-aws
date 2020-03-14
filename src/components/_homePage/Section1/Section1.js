import React from 'react';

import styled from '@emotion/styled';
import { H2 } from '../../reusableStyles/typography/Typography';
import Ticker from './Ticker';

const Container = styled.div`
  padding-top: 6rem;
  padding-bottom: 1rem;
  display: grid;
  justify-content: center;
`;

const Title = styled(H2)`
  text-align: center;

  padding: 2rem;
`;

export const Section1 = () => {
  return (
    <Container>
      <Title>Thousands Trust Zeitlify</Title>
      <Ticker />
    </Container>
  );
};
