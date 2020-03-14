import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 10rem);
  grid-gap: 1rem;
`;

const Grid = styled(Img)`
  object-fit: cover;
`;

const Grid1 = styled(Grid)`
  grid-column: 1/ 2;
  grid-row: 1 / 3;
`;

const Grid2 = styled(Grid)`
  grid-column: 1/ 2;
  grid-row: 3 / 4;
`;

const Grid3 = styled(Grid)`
  grid-column: 2/ 3;
  grid-row: 1 / 2;
`;

const Grid4 = styled(Grid)`
  grid-column: 2/ 3;
  grid-row: 2 / -1;
`;

const Grid5 = styled(Grid)`
  grid-column: 3/ -1;
  grid-row: 1 / 3;
`;

const Grid6 = styled(Grid)`
  grid-column: 3/ -1;
  grid-row: 3 / -1;
`;

export const ImageGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "about/ladder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "about/drone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "about/code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "about/robot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "about/stevejobs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "about/tower.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  console.log('data', data.image1.childImageSharp.fluid);
  return (
    <Container>
      <Grid1 fluid={data.image1.childImageSharp.fluid} />
      <Grid2 fluid={data.image2.childImageSharp.fluid} />
      <Grid3 fluid={data.image3.childImageSharp.fluid} />
      <Grid4 fluid={data.image4.childImageSharp.fluid} />
      <Grid5 fluid={data.image5.childImageSharp.fluid} />
      <Grid6 fluid={data.image6.childImageSharp.fluid} />
    </Container>
  );
};
