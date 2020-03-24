import React, { useState } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby-link';
import { ButtonSweepToRight } from '../../reusableStyles/buttons/Button';

// Function to Make Netlify Submission and Gatsby Work
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Field = styled.div`
  margin: 2rem 0;
  & .hidden {
    display: none;
  }
`;

const Label = styled.label`
  display: block;
  outline: none;
  position: relative;

  & input,
  textarea {
    width: 100%;
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
  }

  & textarea {
    height: 10rem;
  }

  & span {
    font-size: 1.5rem;
    pointer-events: none;
    position: absolute;
    left: 10px;
    top: 5px;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0.5;
  }
  & input,
  & textarea {
    &:focus + span {
      opacity: 1;
      transform: translateY(-105%) translateX(-5px);
      font-size: 1.3rem;
    }
  }
`;

const Form = styled.form``;

const Button = styled(ButtonSweepToRight)`
  color: ${props => props.theme.colors.white};
  width: 100%;
  font-size: 1.7rem;
`;

export const ContactForm = ({ color }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name,
      email,
      phone,
      jobTitle,
      message,
    };

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        jobTitle: userData.jobTitle,
        message: userData.message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thank-you/"
      onSubmit={handleSubmit}
    >
      <Field className="hidden">
        <Label className="hidden">
          Hidden Honey Bot Spam Field: <input name="bot-field" />
        </Label>
      </Field>
      <Field>
        <Label>
          <input
            onChange={event => setName(event.target.value)}
            placeholder=""
            style={{ background: `${color}` }}
            type="text"
            name="name"
            required
          />
          <span>Your Name</span>
        </Label>
      </Field>
      <Field>
        <Label>
          <input
            onChange={event => setEmail(event.target.value)}
            placeholder=""
            type="email"
            name="email"
            required
          />
          <span>Business Email</span>
        </Label>
      </Field>

      <Field>
        <Label>
          <input
            onChange={event => setPhone(event.target.value)}
            placeholder=""
            type="text"
            name="phone"
            required
          />
          <span>Phone</span>
        </Label>
      </Field>

      <Field>
        <Label>
          <input
            onChange={event => setJobTitle(event.target.value)}
            placeholder=""
            type="text"
            name="jobTitle"
            required
          />
          <span>Job Title</span>
        </Label>
      </Field>

      <Field>
        <Label>
          <textarea
            onChange={event => setMessage(event.target.value)}
            placeholder=""
            name="message"
            required
            minLength="10"
            maxLength="1000"
          />
          <span>Project Outline or Question</span>
        </Label>
      </Field>
      <Field>
        <Button type="submit">Get In Touch</Button>
      </Field>
    </Form>
  );
};
