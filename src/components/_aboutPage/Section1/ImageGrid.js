import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 10rem);
  grid-gap: 1rem;
`;

const Grid = styled.div`
  background: ${props => props.theme.colors.red};
  &:hover {
    background: ${props => props.theme.colors.black};
  }
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
  return (
    <Container>
      <Grid1></Grid1>
      <Grid2></Grid2>
      <Grid3></Grid3>
      <Grid4></Grid4>
      <Grid5></Grid5>
      <Grid6></Grid6>
    </Container>
  );
};
