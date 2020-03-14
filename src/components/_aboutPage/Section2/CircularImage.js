import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.colors.lightgrey},
    ${props => props.theme.colors.white}
  );
  height: 25rem;
  width: 25rem;
  margin: 0 auto;
`;

const Image = styled(Img)`
  background: ${props => props.theme.colors.white};
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export const CircularImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "_about/ela-musk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Image fluid={data.image1.childImageSharp.fluid} />
    </Container>
  );
};
