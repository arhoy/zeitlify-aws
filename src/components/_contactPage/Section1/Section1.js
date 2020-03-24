import React from 'react';

import styled from '@emotion/styled';
import { Blurb } from './Blurb';
import { Contact } from './Contact';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  padding: 6rem 2rem;
  max-width: ${props => props.theme.screenSize.twelveHundred};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    grid-row-gap: 5rem;
  }
`;

const SubContainerBlurb = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-row: 2/-1;
    grid-column: 1/-1;
  }
`;

const SubContainerForm = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-row: 1/2;
    grid-column: 1/-1;
  }
`;

export const Section1 = () => {
  return (
    <Container>
      <SubContainerBlurb>
        <Blurb />
      </SubContainerBlurb>
      <SubContainerForm>
        <Contact />
      </SubContainerForm>
    </Container>
  );
};
