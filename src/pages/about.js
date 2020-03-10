import React from 'react';

import styled from '@emotion/styled';
import BackgroundSvg from '../components/home/BettterWay/BackgroundSvg';

const Section = styled.div`
  background: red;
  width: 100vw;
  height: 100vh;
`;

const AboutPage = () => {
  return (
    <Section>
      <BackgroundSvg />
    </Section>
  );
};

export default AboutPage;
