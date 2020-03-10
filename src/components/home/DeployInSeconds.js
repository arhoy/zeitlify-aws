import React from 'react';
import styled from '@emotion/styled';
import NetlifyBlob1 from '../reusableStyles/cards/netlifyCards/NetlifyBlob1';
import {
  Section,
  SectionWhiteToGrey,
} from '../reusableStyles/sections/Sections';
import { H2 } from '../reusableStyles/typography/Typography';
import NetlifyBlob2 from '../reusableStyles/cards/netlifyCards/NetlifyBlob2';
import NetlifyBlob3 from '../reusableStyles/cards/netlifyCards/NetlifyBlob3';

const Container = styled.div`
  padding: 6rem 2rem;

  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    flex-direction: column;
    & > * {
      padding: 2rem 0;
    }
  }
`;

const H2Centered = styled(H2)`
  text-align: center;
  font-size: 4rem;
`;

const DeployInSeconds = () => {
  return (
    <SectionWhiteToGrey>
      <H2Centered> Instant Feedback Loop</H2Centered>
      <Container>
        <NetlifyBlob1 />
        <NetlifyBlob2 />
        <NetlifyBlob3 />
      </Container>
    </SectionWhiteToGrey>
  );
};
export default DeployInSeconds;
