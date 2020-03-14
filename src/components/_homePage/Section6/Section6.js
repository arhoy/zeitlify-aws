import React from 'react';
import { Section } from '../../reusableStyles/sections/Sections';
import NetlifyCard2 from '../../reusableStyles/cards/netlifyCards/NetlifyCard2';

export const Section6 = ({ fluid }) => {
  return (
    <Section>
      <NetlifyCard2
        title={`Work For Zeitlify`}
        subtitle={`Help Make the World A Better Place`}
        blurb={`If you are a developer or designer interested in working for us we would love to hear from you!`}
        link={`Learn More`}
        linkURL="#"
        picture={fluid}
      />
    </Section>
  );
};
