import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import { H2 } from '../../reusableStyles/typography/Typography';
import Card from './Card';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const CardContainer = styled(Container1000)``;

export const Section4 = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "computers.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "clouds.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "data.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section>
      <TitleContainer>
        <H2> Go Above and Beyond</H2>
      </TitleContainer>

      <CardContainer>
        <Card
          title="Fundamental Robotic Process Automation"
          blurb={`Deploy to a redundant network of servers with built‑in continuous integration and HTTPS.`}
          fluid={data.image1.childImageSharp.fluid}
        />
        <Card
          title="Get Ready for the Cloud"
          blurb={`Boot to the cloud where all your cloud storage needs are satisfied with unlimited capacity`}
          fluid={data.image2.childImageSharp.fluid}
          reverse={true}
        />
        <Card
          title="Our Data Servers Are Ready"
          blurb={`Our Data servers are ready for ddos and xss attacks on any network`}
          fluid={data.image3.childImageSharp.fluid}
        />
      </CardContainer>
    </Section>
  );
};
