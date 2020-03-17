import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import { H1 } from '../components/reusableStyles/typography/Typography';

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

const BlogPage = () => {
  return (
    <Layout full={true}>
      <SEO
        title="Blog | Zeitlify"
        description="Zeitlify Blog is coming soon"
        pathname="blog"
      />
      <H1 style={{ textAlign: 'center' }}>COMING SOON</H1>
    </Layout>
  );
};

export default BlogPage;
