import React from 'react';

import Amplify from 'aws-amplify';

import { withAuthenticator } from 'aws-amplify-react';

import aws_exports from '../aws-exports';

import Layout from '../components/layouts/Layout';

import FormBasic from '../components/_app/Forms/FormBasic';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import { NoteTaker } from '../components/_app/NoteTaker/NoteTaker';

Amplify.configure(aws_exports);

const myFederatedConfig = {
  facebook_app_id: '199713708139956', // Enter your facebook_app_id here
};

const AppPage = () => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <NoteTaker />
        </Container1200>
      </Section>
    </Layout>
  );
};

export default withAuthenticator(AppPage, {
  includeGreetings: true,
  federated: { myFederatedConfig },
});
