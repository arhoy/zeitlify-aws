import React from 'react';

import { Card } from './Card';

export const Card1 = ({ fluid, children }) => {
  return (
    <Card
      title={`Analytics`}
      subtitle={'Powerful dashboards that show your user data in real time'}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    >
      {children}
    </Card>
  );
};

export const Card2 = ({ fluid, children }) => {
  return (
    <Card
      title={`Face Recognition`}
      subtitle={'Teaming up with Cloudify to use Artifical Intelligence'}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    >
      {children}
    </Card>
  );
};

export const Card3 = ({ fluid, children }) => {
  return (
    <Card
      title={`Premium Support`}
      subtitle={'24/7 Support to our platinum members'}
      link={'Learn More'}
      linkURL={'/#'}
      picture={fluid}
    >
      {children}
    </Card>
  );
};
