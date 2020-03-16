import React from 'react';

import NetlifyCard2 from '../../reusableStyles/cards/netlifyCards/NetlifyCard2';

export const Card1 = ({ fluid }) => {
  return (
    <NetlifyCard2
      title={`Analytics`}
      subtitle={'Powerful dashboards that show your user data in real time'}
      blurb={`Enim labore ex minim et fugiat occaecat consequat consectetur adipisicing. Commodo et aute aliqua mollit qui Lorem cillum do incididunt nisi culpa officia consequat et. Qui amet in adipisicing fugiat voluptate dolor commodo nulla `}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    />
  );
};

export const Card2 = ({ fluid }) => {
  return (
    <NetlifyCard2
      title={`Face Recognition`}
      subtitle={'Teaming up with Cloudify to use Artifical Intelligence'}
      blurb={`Excepteur est amet reprehenderit ut minim ea laborum consectetur est ex magna. Magna esse nulla mollit ex do pariatur quis. Velit ullamco dolore aute eiusmod. Mollit anim aliquip in quis excepteur aute nulla eiusmod nostrud. `}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    />
  );
};

export const Card3 = ({ fluid }) => {
  return (
    <NetlifyCard2
      title={`Premium Support`}
      subtitle={'24/7 Support to our platinum members'}
      blurb={`Ut irure anim dolore anim in adipisicing laboris. Aliqua deserunt eiusmod labore aute ad non in ad Lorem nisi dolore cupidatat nostrud. Quis nostrud pariatur sunt laborum esse id irure officia nostrud elit voluptate.`}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    />
  );
};
