import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.lightgrey};
  height: 25rem;
  width: 25rem;
  margin: 0 auto;
`;

const Img = styled.div`
  background: ${props => props.theme.colors.white};
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export const CircularImage = ({ fluid }) => {
  return (
    <Container>
      <Img fluid={fluid} />
    </Container>
  );
};
