import emailjs from '@emailjs/browser';
import { theme } from 'assets/styles/theme';

import { useRef } from 'react';
import styled from 'styled-components';

const EmailForm = () => {
  const emailForm = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        emailForm.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        result => console.log(result.text),
        error => console.log(error.text)
      );
  };

  return (
    <Container className="form-wrapper">
      <h1>Want to work with me?</h1>
      <form ref={emailForm} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" required />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </Container>
  );
};

export default EmailForm;

const Container = styled.div`
  ${theme.flex('column', 'flex-start', '', 60)};
  width: 100%;
  max-width: 500px;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }

  form {
    ${theme.flex('column', '', '', 24)};
    width: 100%;

    div {
      ${theme.flex('column', '', '', 8)};

      label {
        font-size: 1.4rem;
      }

      input,
      textarea {
        padding: 14px 12px;
        border: 1px solid #e8e8e8;
        color: ${theme.color.main};
      }

      textarea {
        height: 100px;
        resize: none;
      }
    }

    button {
      width: 100%;
      height: 44px;
      background-color: #3a3a3a;
      color: white;
    }
  }

  @media (max-width: 1000px) {
    gap: 30px;
  }
`;
