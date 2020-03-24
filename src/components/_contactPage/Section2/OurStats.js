import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    align-items: flex-start;
  }
`;

const Stat = styled.div`
  & span {
    font-size: 5rem;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: 4rem;
    }
  }
`;

const Blurb = styled.div`
  & p {
    text-align: center;
    opacity: 0.8;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      text-align: left;
    }
  }
`;

export const OurStats1 = () => {
  return (
    <Container>
      <Stat>
        <span>12</span>
      </Stat>
      <Blurb>
        <p>Data Servers</p>
      </Blurb>
    </Container>
  );
};

export const OurStats2 = () => {
  return (
    <Container>
      <Stat>
        <span>99.97%</span>
      </Stat>
      <Blurb>
        <p>Service Uptime</p>
      </Blurb>
    </Container>
  );
};

export const OurStats3 = () => {
  return (
    <Container>
      <Stat>
        <span>30</span>
      </Stat>
      <Blurb>
        <p>Fortune 500 Companies</p>
      </Blurb>
    </Container>
  );
};

export const OurStats4 = () => {
  return (
    <Container>
      <Stat>
        <span>10M</span>
      </Stat>
      <Blurb>
        <p>Automation Workflows</p>
      </Blurb>
    </Container>
  );
};
