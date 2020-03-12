import React from 'react';

import styled from '@emotion/styled';
import { H2 } from '../reusableStyles/typography/Typography';
import Ticker from '../ticker/Ticker';

const Container = styled.div``;

const Title = styled(H2)`
  text-align: center;

  padding: 2rem;
`;

const Companies = () => {
  return (
    <Container>
      <Title>Thousands Trust Zeitlify</Title>
      <Ticker />
    </Container>
  );
};

export default Companies;
