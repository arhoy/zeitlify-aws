import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layouts/Layout';
import BackgroundSvg from '../components/svg/backgroundSvg';
import { HeroBlurb } from '../components/home/HeroBlurb';
import { Section } from '../components/reusableStyles/sections/Sections';
import Companies from '../components/home/Companies';

const BackgroundSvgContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const CustomSection = styled.div`
  padding-top: 6rem;
  padding-bottom: 1rem;
  display: grid;
  justify-content: center;
`;

const IndexPage = () => {
  return (
    <Layout full={true}>
      <BackgroundSvgContainer>
        <BackgroundSvg />
      </BackgroundSvgContainer>
      <CustomSection>
        <HeroBlurb />
      </CustomSection>
      <CustomSection>
        <Companies />
      </CustomSection>
    </Layout>
  );
};

export default IndexPage;
