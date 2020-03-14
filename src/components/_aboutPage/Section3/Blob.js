import React from 'react';

import styled from '@emotion/styled';

import blobshape from '../../../../images/svg/blob-shape-about.svg';

import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa';

const Container = styled.div``;

const SubContainer = styled.div`
  z-index: 0;
  background: url(${blobshape}) no-repeat center;
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UL = styled.ul`
  list-style: none;

  & li {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    padding: 0.5rem 1rem;
    width: 25rem;
    margin: 2rem 0;
    box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
    border: 1px solid ${props => props.theme.colors.lightgrey2};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 2rem;
  margin: 1rem 0;
  text-align: center;
`;

const GitHubIcon = styled(FaGithub)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const BitbucketIcon = styled(FaBitbucket)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const GitlabIcon = styled(FaGitlab)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
`;

export const Blob = () => {
  return (
    <Container>
      <TitleContainer>
        <Title> Using Advanced Math and Stats</Title>
      </TitleContainer>

      <SubContainer>
        <UL>
          <li>
            <GitHubIcon /> Graph Theory
          </li>
          <li>
            <BitbucketIcon /> Probalility
          </li>
          <li>
            <GitlabIcon /> Quantum Mechanics
          </li>
        </UL>
      </SubContainer>
    </Container>
  );
};
