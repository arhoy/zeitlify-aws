import React from 'react';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';
import ArrowSvg from './ArrowSvg';

const Link = styled(NoStyleLink)`
  margin-right: 1rem;
  & span {
    font-weight: 700;
  }
`;

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 10px 7px 22px 0px rgba(247, 247, 247, 0.3);
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  width: 30rem;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    width: 100%;
  }

  &:hover {
    ${Link} {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const LinkCard1 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> Butterify </span>{' '}
      </Link>
      <ArrowSvg />
    </Container>
  );
};

export const LinkCard2 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> Ghoster </span>{' '}
      </Link>
      <ArrowSvg />
    </Container>
  );
};

export const LinkCard3 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> Hooli </span>{' '}
      </Link>
      <ArrowSvg />
    </Container>
  );
};

export const LinkCard4 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> New View </span>{' '}
      </Link>
      <ArrowSvg />
    </Container>
  );
};

export const LinkCard5 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> Ponder </span>{' '}
      </Link>
      <ArrowSvg />
    </Container>
  );
};

export const LinkCard6 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> MoonBox </span>{' '}
      </Link>
      <ArrowSvg />
    </Container>
  );
};
