import React from 'react';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section0 } from '../components/_servicesPage/Section0/Section0';
import { Section1 } from '../components/_servicesPage/Section1/Section1';
import { Section2 } from '../components/_servicesPage/Section2/Section2';
import { Section3 } from '../components/_servicesPage/Section3/Section3';
import { Section4 } from '../components/_servicesPage/Section4/Section4';
import { Section5 } from '../components/_servicesPage/Section5/Section5';
import { Section6 } from '../components/_servicesPage/Section6/Section6';
import { Section7 } from '../components/_servicesPage/Section7/Section7';

export const query = graphql`
  query {
    aboutImage1: file(relativePath: { eq: "_about/tower.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const ServicesPage = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="Our Services | Zeitlify"
        description="Zeitlify is a made up automation company under the parent company of Aquasar Inc a Web Development Agency in Edmonton Canada. Here is some information about our company and founder"
        pathname="about"
      />

      <Section0 fluid={data.aboutImage1.childImageSharp.fluid} />
      <Fade bottom>
        <Section1 />
      </Fade>
      <Fade bottom>
        <Section2 />
      </Fade>
      <Fade bottom>
        <Section3 />
      </Fade>
      <Fade bottom>
        <Section4 />
      </Fade>
      <Fade bottom>
        <Section5 fluid={data.aboutImage1.childImageSharp.fluid} />
      </Fade>
      <Fade bottom>
        <Section6 />
      </Fade>
      <Fade bottom>
        <Section7 />
      </Fade>
    </Layout>
  );
};

export default ServicesPage;
