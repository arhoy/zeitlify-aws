import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

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

const Img = styled.div`
  background: red;
  width: 18rem;
  height: 18rem;
  margin-bottom: 1rem;
`;

const Link = styled(NoStyleLink)`
  color: ${props => props.theme.colors.secondary};
  &:hover {
    text-decoration: underline;
  }
`;

export const Card1 = () => {
  return (
    <Card>
      <Img />
      <Title> Import Your Data Task</Title>
      <Blurb>
        Quis consectetur sit quis aliqua mollit consequat in sunt{' '}
        <Link to="#">automata</Link> aliquip qui laboris nulla ea excepteur.{' '}
      </Blurb>
    </Card>
  );
};
