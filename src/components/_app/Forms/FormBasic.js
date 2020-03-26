// Render Prop
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'cross-fetch/polyfill';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { getSecondPartOfString } from '../../../utils/awsHelpers';

const Container = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  padding: 4rem;
`;

const FieldContainer = styled.div`
  margin: 2rem 0;
`;

const Button = styled.button`
  background: ${props => props.theme.colors.white};
  outline: none;
  padding: 4px 8px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`;

const StyledField = styled(Field)`
  padding: 3px 6px;
  border: 1px solid 
  width: 50rem;
  display: block;
  padding: 5px;
  padding-left: 10px;
  background: transparent;
  border: none;
  border-radius: 5px;
  border: 2px solid rgba(14, 30, 37, 0.15);
  font-family: Poppins, Roboto;
  font-size: 1.4rem;
  font-weight: 400;
  outline-color: ${props => props.theme.colors.secondary};
`;

const FormBasic = () => {
  const [submitErrors, setSubmitError] = useState(null);
  const poolData = {
    UserPoolId: 'us-east-us-east-2_Ut6o2V8Me',
    ClientId: '7aaqu0citpfnsrl64ico875k3j',
  };

  const UserPool = new CognitoUserPool(poolData);

  return (
    <Container>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ name: '', email: '', phone_number: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          } else if (!values.password) {
            errors.password = 'Please supply valid password';
          } else if (!values.phone_number) {
            errors.phone_number = 'Please enter a phone Number';
          } else if (values.phone_number.match(/\d/g).length < 10) {
            errors.phone_number =
              'Please enter a valid phone number with 10 digits';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          //destructure values
          const { name, email, phone_number, password } = values;
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          // code here
          UserPool.signUp(
            name,
            email,
            phone_number,
            password,
            [],
            null,
            (err, data) => {
              console.log('data is', data);
              if (err) {
                console.log('There was an error', err);
                setSubmitError(err.message);
              }

              // form is good now
              console.log('SUBMIT IS GOOD', data);
            },
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FieldContainer>
              <StyledField type="text" name="name" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" />
            </FieldContainer>
            <FieldContainer>
              <StyledField type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
            </FieldContainer>

            <FieldContainer>
              <StyledField
                type="phone_number"
                name="phone_number"
                placeholder="phone_number"
              />
              <ErrorMessage name="phone_number" component="div" />
            </FieldContainer>
            <FieldContainer>
              <StyledField
                type="password"
                name="password"
                placeholder="password"
              />
              <ErrorMessage name="password" component="div" />
            </FieldContainer>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            {submitErrors && <div>{getSecondPartOfString(submitErrors)}</div>}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormBasic;
