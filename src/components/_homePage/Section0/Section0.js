import React from 'react';
import styled from '@emotion/styled';
import { HeroBlurb } from './HeroBlurb';

import { Section } from '../../reusableStyles/sections/Sections';
import BackgroundSvg from './BackgroundSvg';

const CustomSection = styled(Section)`
  position: relative;

  color: ${props => props.theme.colors.white};
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primaryLight}
  );
  width: 100%;
`;

export const Section0 = () => {
  return (
    <CustomSection>
      <HeroBlurb />
      <BackgroundSvg />
    </CustomSection>
  );
};
