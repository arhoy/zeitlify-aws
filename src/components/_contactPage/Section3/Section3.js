import React from 'react';
import styled from '@emotion/styled';

import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import NetlifyCard2 from '../../reusableStyles/cards/netlifyCards/NetlifyCard2';
import { H3 } from '../../reusableStyles/typography/Typography';

const CustomSection = styled(Section)`
  background: linear-gradient(
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.lightgrey}
  );
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    margin: 2rem 0;
    opacity: 0.8;
    text-align: center;
  }
  margin-bottom: 3rem;
`;

export const Section3 = ({ fluid }) => {
  return (
    <CustomSection>
      <Container1200>
        <TitleContainer>
          <H3>An Automation Story</H3>
          <p>
            How Procrastagram was able to increase productivity with Zeitlify
          </p>
        </TitleContainer>

        <NetlifyCard2
          title={`Recommended For Automation`}
          subtitle={`How Procrastagram increased their efficiency ten Fold`}
          blurb={`Ad minim irure eiusmod Lorem excepteur eiusmod reprehenderit dolore sit laborum cupidatat excepteur non sint. Pariatur eu velit.`}
          link={`Learn More`}
          linkURL="#"
          picture={fluid}
        />
      </Container1200>
    </CustomSection>
  );
};
