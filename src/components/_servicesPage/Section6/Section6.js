import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import { H2 } from '../../reusableStyles/typography/Typography';
import { Card1, Card2, Card3 } from './Cards';

const CustomSection = styled(Section)`
  position: relative;

  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  text-align: center;
`;

const Subtitle = styled.h4`
  opacity: 0.6;
  font-size: 2rem;
`;

export const Section6 = () => {
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
    <CustomSection>
      <TitleContainer>
        <H2> Powerful Service Add-Ons</H2>
        <Subtitle>
          Supercharge your automation with these powerful add-ons
        </Subtitle>
      </TitleContainer>
      <Container1200>
        <Card1 fluid={data.image1.childImageSharp.fluid} />
        <Card2 fluid={data.image2.childImageSharp.fluid} />
        <Card3 fluid={data.image3.childImageSharp.fluid} />
      </Container1200>
    </CustomSection>
  );
};
