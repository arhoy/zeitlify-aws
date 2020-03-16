import React from 'react';
import styled from '@emotion/styled';
import { FaArrowRight } from 'react-icons/fa';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import apiSVG from '../../../../images/svg/services/flash-drive.svg';
import dataSVG from '../../../../images/svg/services/data-storage.svg';
import gearsSVG from '../../../../images/svg/services/gears.svg';

import { Card } from './Card';

const Container = styled(Container1000)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const StyledArrow = styled(FaArrowRight)`
  opacity: 0.9;
  font-size: 4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    transform: rotate(90deg);
  }
`;

export const Section1 = () => {
  return (
    <Section>
      <Container>
        <Card title={`Plug Into Our Database`} url={apiSVG} />
        <StyledArrow />
        <Card title={`Store Robots in the Cloud`} url={dataSVG} />
        <StyledArrow />
        <Card title={`Deploy Bots to Workflow`} url={gearsSVG} />
      </Container>
    </Section>
  );
};
