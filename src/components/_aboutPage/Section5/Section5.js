import React from 'react';
import { Section } from '../../reusableStyles/sections/Sections';
import NetlifyCard2 from '../../reusableStyles/cards/netlifyCards/NetlifyCard2';

export const Section5 = ({ fluid }) => {
  return (
    <Section>
      <NetlifyCard2
        title={`Series C Funding`}
        subtitle={`New $100M Series C Funding Secured`}
        blurb={`Zeitlify announces a Series C funding and new hiring for developers and data scientists`}
        link={`Join Us`}
        linkURL="#"
        picture={fluid}
      />
    </Section>
  );
};
