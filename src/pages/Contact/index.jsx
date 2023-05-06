// import emailjs from '@emailjs/browser';

import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

import Footer from 'components/Footer';
import Header from 'components/Header';
import profileSrc from 'assets/images/contact_profile.jpg';
import EmailForm from './EmailForm';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    return () => {
      setIsShow(false);
    };
  }, []);

  return (
    <Container>
      <Header />
      <section className={`middle ${isShow ? 'visible' : 'hidden'}`}>
        <EmailForm />
        <div className="img-wrapper">
          <ul>
            <li>
              <span>Email&nbsp;&nbsp;</span> glaxxkim@naver.com
            </li>
            <li>
              <span>Phone&nbsp;&nbsp;</span> +82 10 2938 7920
            </li>
            <li>
              <span>Instagram&nbsp;&nbsp;</span> glaxxkim
            </li>
          </ul>
          <img src={profileSrc} data-src={profileSrc} alt="" />
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  .middle {
    ${theme.flex('', '', 'center', 40)};
    padding: 0 10vw;
    width: 100%;

    .img-wrapper {
      ul {
        margin-bottom: 20px;

        li {
          margin-bottom: 6px;
          font-size: 1.4rem;

          span {
            font-weight: bold;
            color: ${theme.color.main};
          }
        }
      }

      img {
        width: 500px;

        @media (max-width: 640px) {
          width: 100%;
        }
      }
    }

    @media (max-width: 1000px) {
      ${theme.flex('column-reverse', 'center', 'center', 40)}
    }

    @media (max-width: 460px) {
      padding: 0 18px;
    }
  }
`;
