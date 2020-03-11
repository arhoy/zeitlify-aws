import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layouts/Layout';

import { HeroBlurb } from '../components/home/HeroBlurb';

import Companies from '../components/home/Companies';

import { Section } from '../components/reusableStyles/sections/Sections';
import NetlifyCard1 from '../components/reusableStyles/cards/netlifyCards/NetlifyCard1';
import DeployInSeconds from '../components/home/DeployInSeconds';
import GoBeyondStatic from '../components/home/GoBeyondStatic/GoBeyondStatic';
import { BetterWay } from '../components/home/BettterWay/BetterWay';
import NetlifyCard2 from '../components/reusableStyles/cards/netlifyCards/NetlifyCard2';
import TwitterSectiion from '../components/home/TwitterSection/TwitterSection';
import ReadyToTry from '../components/home/ReadyToTry';

import backgroundImage from '../../images/svg/mywave.svg';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }

    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageCard1: file(relativePath: { eq: "nelifycard.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const BackgroundSvgContainer = styled.div`
  position: absolute;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 70vh;
  z-index: -1;
  top: 0;
  left: 0;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 60vh;
  }
`;

const HeroBlurbSection = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 8rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 0;
    align-items: flex-start;
    padding-top: 3rem;
  }
`;

const CustomSection = styled.div`
  padding-top: 6rem;
  padding-bottom: 1rem;
  display: grid;
  justify-content: center;
`;

const IndexPage = ({ data }) => {
  console.log('data', data.hero.childImageSharp.fluid);
  return (
    <Layout full={true}>
      <BackgroundSvgContainer />
      <HeroBlurbSection>
        <HeroBlurb />
      </HeroBlurbSection>
      <CustomSection>
        <Companies />
      </CustomSection>
      <Section>
        <NetlifyCard1
          title={`America's top middleout compressor delivers 10X faster`}
          blurb={`Not only is Pied Piper launching faster sites, they are blowing their competitors away with blazing speed.`}
          link={`Read More`}
          linkURL="#"
          picture={data.imageCard1.childImageSharp.fluid}
        />
      </Section>
      {/* deploy in  section */}
      <DeployInSeconds />
      {/* go beyond  section */}
      <GoBeyondStatic />
      {/* go beyond static section */}
      <BetterWay />

      <Section>
        <NetlifyCard2
          title={`Work For Zeitlify`}
          subtitle={`Help Make the World A Better Place`}
          blurb={`If you are a developer or designer interested in working for us we would love to hear from you!`}
          link={`Learn More`}
          linkURL="#"
          picture={data.imageCard1.childImageSharp.fluid}
        />
      </Section>

      <Section style={{ paddingTop: '3rem' }}>
        <TwitterSectiion />
      </Section>

      <ReadyToTry />
    </Layout>
  );
};

export default IndexPage;
