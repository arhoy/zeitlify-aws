import React from 'react';

import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';

import Layout from '../components/layouts/Layout';
import { Section0 } from '../components/_contactPage/Section0/Section0';
import { Section1 } from '../components/_contactPage/Section1/Section1';
import { Section2 } from '../components/_contactPage/Section2/Section2';
import { Section3 } from '../components/_contactPage/Section3/Section3';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
    imageCard1: file(relativePath: { eq: "_contact/procrast.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact Us | Zeitlify"
        description="At Zeitlify we are here to discuss your next automation project"
        pathname="contact"
        image={data.seo.childImageSharp.fluid.src}
      />
      {/* Talk to our experts */}
      <Section0 />

      {/* Reach our Sales Team  */}
      <Section1 />

      {/* Our Stats */}
      <Section2 />

      {/* Netlify Card */}
      <Section3 fluid={data.imageCard1.childImageSharp.fluid} />
    </Layout>
  );
};

export default contact;
