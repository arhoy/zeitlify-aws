import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 28rem;
`;

const Link = styled(NoStyleLink)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  & span {
    font-weight: bold;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled(FaAngleDoubleRight)`
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
  opacity: 0.8;
`;

export const LinkCard1 = () => {
  return (
    <Container>
      <Link to="#">
        Automated <span>Site Deploys</span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard2 = () => {
  return (
    <Container>
      <Link to="#">
        Real Time <span> Dashboards</span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard3 = () => {
  return (
    <Container>
      <Link to="#">
        API <span> Integrations </span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard4 = () => {
  return (
    <Container>
      <Link to="#">
        Unlimited <span> Uploads </span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard5 = () => {
  return (
    <Container>
      <Link to="#">
        10X <span> Bot Builds </span>
      </Link>
      <Icon />
    </Container>
  );
};

export const LinkCard6 = () => {
  return (
    <Container>
      <Link to="#">
        24/7 <span> Customer Support </span>
      </Link>
      <Icon />
    </Container>
  );
};
