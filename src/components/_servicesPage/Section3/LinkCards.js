import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const Link = styled(NoStyleLink)`
  font-size: 2rem;
  & span {
    font-weight: bold;
  }
`;

const Icon = styled(FaAngleDoubleRight)`
  font-size: 3rem;
  color: ${props => props.theme.colors.grey};
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
