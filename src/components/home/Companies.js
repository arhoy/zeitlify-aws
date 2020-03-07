import React from 'react';

import styled from '@emotion/styled';
import { H2 } from '../reusableStyles/typography/Typography';
import Ticker from '../ticker/Ticker';

const Container = styled.div``;

const Title = styled(H2)``;

const Companies = () => {
  return (
    <Container>
      <Title>Thousands of Companies Trust Zeitlify</Title>
      <Ticker />
    </Container>
  );
};

export default Companies;
