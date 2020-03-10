import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import styled from '@emotion/styled';

import snapify from '../../../images/svg/snapify.svg';
import ajdental from '../../../images/svg/ajdental.svg';
import amazone from '../../../images/svg/amazone.svg';
import mintrist from '../../../images/svg/mintrist.svg';

const CompanyImage = styled.img`
  width: 10rem;
  margin: 2rem;
`;

const TickerContainer = styled(Ticker)`
  position: relative;
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2vw;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, white, transparent);
  }
`;

const MyCompanyTicker = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible);
  };

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <TickerContainer speed={2}>
          {({ index }) => (
            <>
              <CompanyImage src={snapify} />
              <CompanyImage src={ajdental} />
              <CompanyImage src={amazone} />
              <CompanyImage src={mintrist} />
            </>
          )}
        </TickerContainer>
      )}
    </PageVisibility>
  );
};

export default MyCompanyTicker;
