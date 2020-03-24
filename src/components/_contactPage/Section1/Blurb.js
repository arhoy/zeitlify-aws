import React from 'react';

import styled from '@emotion/styled';
import { H4, H5 } from '../../reusableStyles/typography/Typography';

import snapify from '../../../../images/svg/snapify.svg';
import ajdental from '../../../../images/svg/ajdental.svg';
import amazone from '../../../../images/svg/amazone.svg';
import mintrist from '../../../../images/svg/mintrist.svg';

const Container = styled.div`
  & p {
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    opacity: 0.9;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CompanyImage = styled.img`
  width: 10rem;
  height: 100%;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
`;

export const Blurb = () => {
  return (
    <Container>
      <H4>Lets Discuss Automation</H4>
      <p>
        Consequat labore ex in dolore aliquip consequat. Culpa adipisicing
        proident enim adipisicing irure. Ea culpa veniam ad nulla tempor.
        Exercitation adipisicing.
      </p>
      <H5>We've got your back</H5>
      <p>
        Nostrud aute consequat velit enim cillum. Laboris ipsum culpa id
        proident ullamco labore ullamco ad commodo. Exercitation laboris ut elit
        fugiat quis exercitation.
      </p>
      <ImageContainer>
        <CompanyImage src={snapify} />
        <CompanyImage src={ajdental} />
        <CompanyImage src={amazone} />
        <CompanyImage src={mintrist} />
      </ImageContainer>
    </Container>
  );
};
