import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';
import { H2 } from '../../reusableStyles/typography/Typography';
import { Card1, Card2, Card3 } from './Cards';
import { Text1, Text2, Text3 } from './Texts';
import BackgroundSvg from './BackgroundSvg';

const CustomSection = styled(Section)`
  position: relative;
  background: linear-gradient(
    180deg,
    white 0%,
    rgba(127, 127, 208, 0.65) 39%,
    ${props => props.theme.colors.primary} 100%
  );
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

const ExtraPaddingBottom = styled.div`
  width: 100%;
  height: 10rem;
`;

export const Section6 = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "_services/analytics.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "_services/ai.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "_services/support.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
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
      <Container1000>
        <Card1 fluid={data.image1.childImageSharp.fluid}>
          {' '}
          <Text1 />{' '}
        </Card1>
        <Card2 fluid={data.image2.childImageSharp.fluid}>
          {' '}
          <Text2 />{' '}
        </Card2>
        <Card3 fluid={data.image3.childImageSharp.fluid}>
          {' '}
          <Text3 />{' '}
        </Card3>
      </Container1000>
      <ExtraPaddingBottom />
      <BackgroundSvg />
    </CustomSection>
  );
};
