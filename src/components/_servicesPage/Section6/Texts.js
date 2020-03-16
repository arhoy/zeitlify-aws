import React from 'react';

import styled from '@emotion/styled';
import NoStyleLink from '../../Links/NoStyleLink';

const Blurb = styled.div`
  color: ${props => props.theme.colors.grey};
`;

const Link = styled(NoStyleLink)`
  color: ${props => props.theme.colors.secondary};
`;

export const Text1 = () => {
  return (
    <Blurb>
      Aliqua consequat ea ipsum eiusmod. Magna labore cupidatat enim id{' '}
      <Link to="/#"> superior analytics </Link>
    </Blurb>
  );
};

export const Text2 = () => {
  return (
    <Blurb>
      Labore consequat magna anim irure adipisicing mollit non ullamco commodo.
      <Link to="/#"> face recognition </Link>
      nulla enim qui Lorem non laborum aliqua. Cupidatat reprehenderit officia
    </Blurb>
  );
};

export const Text3 = () => {
  return (
    <Blurb>
      <Link to="/#"> Our Promise </Link> commodo mollit ut laboris aliqua
      nostrud ea enim ipsum do do deserunt dolore Lorem. Ut dolor nostrud aliqua
      laboris commodo nisi deserunt aute tempor irure est magna.
    </Blurb>
  );
};
