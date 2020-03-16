import React from 'react';
import { graphql } from 'gatsby';

import Fade from 'react-reveal/Fade';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section0 } from '../components/_homePage/Section0/Section0';
import { Section1 } from '../components/_homePage/Section1/Section1';
import { Section2 } from '../components/_homePage/Section2/Section2';
import { Section3 } from '../components/_homePage/Section3/Section3';
import { Section4 } from '../components/_homePage/Section4/Section4';
import { Section5 } from '../components/_homePage/Section5/Section5';
import { Section6 } from '../components/_homePage/Section6/Section6';
import { Section7 } from '../components/_homePage/Section7/Section7';
import { Section8 } from '../components/_homePage/Section8/Section8';

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

const IndexPage = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="Zeitlify | Automation Redefined"
        description="Zeitlify is a made up automation company under the parent company of Aquasar Inc a Web Development Agency in Edmonton Canada"
      />

      {/* Cover Section */}
      <Section0 />

      {/* Thousands Trust Us */}
      <Section1 />

      {/* News Cards Trust Us */}
      <Fade bottom>
        <Section2 fluid={data.imageCard1.childImageSharp.fluid} />
      </Fade>

      {/* instant feedback loop */}
      <Fade bottom>
        <Section3 />
      </Fade>

      {/* Go Above and Beyond */}
      <Fade bottom>
        <Section4 />
      </Fade>

      {/* Better Way to Automate */}
      <Fade bottom>
        <Section5 />
      </Fade>

      {/* Work For Us Card */}
      <Fade bottom>
        <Section6 fluid={data.imageCard1.childImageSharp.fluid} />
      </Fade>

      {/* Twitter Section */}
      <Fade bottom>
        <Section7 />
      </Fade>

      {/* Ready to try this */}
      <Fade bottom>
        <Section8 />
      </Fade>
    </Layout>
  );
};

export default IndexPage;
