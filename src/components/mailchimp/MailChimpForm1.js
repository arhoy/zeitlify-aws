// used as templates refer to MailChimpEmailForm1 for full use

import React, { useState } from 'react';
import styled from '@emotion/styled';

import addToMailchimp from 'gatsby-plugin-mailchimp';

const MailChimpForm1 = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    if (result.result === 'error') {
      setError(true);
      // reset so message is not up for long
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setShowForm(false);
      }, 5000);
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <Closed onClick={closePopUp} />
      <h4>{success ? `Submission Success!` : `Subscribe Now and Save!`}</h4>
      <div>
        Get the latest deals straight to your inbox, never miss a sale again
      </div>

      <SubContainer>
        <input
          type="email"
          placeholder="Your Email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />

        <Button1 type="submit">Submit</Button1>
      </SubContainer>
      {error && <div>Form Submission was not successful</div>}
      {success && (
        <div>
          Thank you for subscribing! Sweet deals are coming to your inbox
        </div>
      )}
    </div>
  );
};

export default MailChimpForm1;
