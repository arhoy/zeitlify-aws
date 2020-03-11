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
  height: 100%;
  margin-right: 1.5rem;
`;

const TickerContainer = styled(Ticker)``;

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
