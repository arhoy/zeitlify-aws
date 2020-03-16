import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

import chipSVG from '../../../../images/svg/services/chip.svg';
import dataStorageSVG from '../../../../images/svg/services/database-storage.svg';
import settingsSVG from '../../../../images/svg/services/settings.svg';
import robotSVG from '../../../../images/svg/services/industrial-robot.svg';

const Card = styled.div`
  width: 40rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(H3)`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Blurb = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.grey};
  font-weight: 300;
`;

const Img = styled.img`
  border: 4px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 50%;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Link = styled(NoStyleLink)`
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export const Card1 = () => {
  return (
    <Card>
      <Img src={chipSVG} />
      <Title> Import Your Data Task</Title>
      <Blurb>
        Quis consectetur sit quis aliqua mollit consequat in sunt{' '}
        <Link to="#">automata</Link> aliquip qui laboris nulla ea excepteur.
        consectetur elit nulla elit excepteur irure et ipsum
      </Blurb>
    </Card>
  );
};

export const Card2 = () => {
  return (
    <Card>
      <Img src={dataStorageSVG} />
      <Title>Build Bot Workflow</Title>
      <Blurb>
        <Link to="#">Bot</Link> reprehenderit deserunt qui nisi ipsum magna
        fugiat et. Dolore incididunt magna velit sint commodo excepteur veniam.
        Consectetur elit nulla elit excepteur irure et ipsum
      </Blurb>
    </Card>
  );
};

export const Card3 = () => {
  return (
    <Card>
      <Img src={settingsSVG} />
      <Title>Assign Tasks</Title>
      <Blurb>
        Consequat ea ut elit adipisicing anim. Occaecat dolor reprehenderit
        consequat do exercitation ad officia incididunt aliqua et. Culpa ea
        labore <Link to="#">buildify</Link> labore id officia sint Lorem et
        proident nulla.
      </Blurb>
    </Card>
  );
};

export const Card4 = () => {
  return (
    <Card>
      <Img src={robotSVG} />
      <Title>Automate Flow</Title>
      <Blurb>
        Veniam ad ex quis consectetur elit nulla elit excepteur irure et ipsum
        in. Ullamco enim ea anim velit. Occaecat qui voluptate tempor nulla id
        elit irure. Consequat <Link to="#">rebuild</Link> culpa in id officia do
      </Blurb>
    </Card>
  );
};
