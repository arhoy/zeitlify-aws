import React from 'react';
import { Section } from '../../reusableStyles/sections/Sections';
import NetlifyCard1 from '../../reusableStyles/cards/netlifyCards/NetlifyCard1';

export const Section2 = ({ fluid }) => {
  return (
    <Section>
      <NetlifyCard1
        title={`America's top middleout compressor delivers 10X faster`}
        blurb={`Not only is Pied Piper launching faster sites, they are blowing their competitors away with blazing speed.`}
        link={`Read More`}
        linkURL="#"
        picture={fluid}
      />
    </Section>
  );
};
