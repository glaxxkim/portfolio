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
        'service_xe4tzmi',
        'template_6pxvp4u',
        emailForm.current,
        '4CVAfNGr_kFsBb60n'
      )
      .then(
        result => {
          console.log('result', result);
          alert('이메일 전송이 완료되었습니다');
        },
        error => console.log(error.text)
      );
  };

  return (
    <Container className="form-wrapper">
      <h1>Want to work with me?</h1>
      <form ref={emailForm} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="spoqa"
            id="name"
            name="user_name"
            type="text"
            placeholder="이름을 입력해주세요"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="spoqa"
            id="email"
            name="user_email"
            type="email"
            placeholder="이메일을 입력해주세요"
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="spoqa"
            id="title"
            name="user_title"
            type="text"
            placeholder="제목을 입력해주세요"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="spoqa"
            id="message"
            name="user_message"
            placeholder="내용을 입력해주세요"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </Container>
  );
};

export default EmailForm;

const Container = styled.div`
  ${theme.flex('column', 'flex-start', '', 58)};
  width: 100%;
  max-width: 500px;

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
  }

  form {
    ${theme.flex('column', '', '', 24)};
    width: 100%;

    div {
      ${theme.flex('column', '', '', 8)};

      label {
        font-size: 1.8rem;
      }

      input,
      textarea {
        padding: 14px 12px;
        border: 1px solid #e8e8e8;
        color: ${theme.color.main};

        &::placeholder {
          color: #c5c5c5;
        }
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
      font-size: 1.6rem;
    }
  }

  @media (max-width: 1000px) {
    gap: 30px;
  }
`;
