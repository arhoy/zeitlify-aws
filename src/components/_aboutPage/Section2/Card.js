import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const Subtitle = styled.h4`
  text-align: center;
  color: ${props => props.theme.colors.grey};
`;

const Blurb = styled.div`
  text-align: center;
  & p {
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    margin: 1rem 3px;
  }
`;

export const Card = () => {
  return (
    <Container>
      <Title>Elong Musk</Title>
      <Subtitle>CEO and Founder</Subtitle>
      <Blurb>
        <p>
          Nostrud consectetur eu elit pariatur labore velit et anim. In nisi
          velit cupidatat adipisicing dolore laboris pariatur voluptate ea
          exercitation et enim nostrud.
        </p>
        <p>
          Elit amet proident ad fugiat ullamco commodo sint et labore. Laboris
          elit in ex aliqua adipisicing cillum reprehenderit eu anim.
        </p>
      </Blurb>
    </Container>
  );
};
