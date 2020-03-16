import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

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
`;

const Link = styled(NoStyleLink)`
  margin-right: 1rem;
  & span {
    font-weight: 700;
  }
`;

const Icon = styled(FaArrowCircleRight)`
  font-size: 3rem;
  color: ${props => props.theme.colors.primaryLight};
  transform: rotate(-45deg);
`;

export const LinkCard1 = () => {
  return (
    <Container>
      <Link to="#">
        Integrate with <span> Butterify </span>{' '}
      </Link>
      <Icon />
    </Container>
  );
};
