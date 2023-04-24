import { theme } from 'assets/styles/theme';
import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';

import mainSrc from 'assets/images/main-img.png';
import { useEffect, useState } from 'react';

const Main = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <Container isShow={isShow}>
      <Header />
      <section className="middle">
        <img className={isShow ? 'visible' : 'hidden'} src={mainSrc} alt="" />
        <div className="main-intro">
          <h1 className="intro-title">Lorem Ipsum</h1>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sollicitudin condimentum fermentum. Integer lacinia, dui non
            fermentum venenatis, lacus enim suscipit ante, at bibendum leo nisi
            placerat sem.
          </p>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100vh;

  .hidden {
    opacity: 0;
  }

  .visible {
    opacity: 1;
  }

  .middle {
    ${theme.flex('column', 'center', '', 60)};

    img {
      width: 100%;
      transition: opacity 1s;
    }

    .main-intro {
      padding: 0 120px;
      text-align: center;

      .intro-title {
        margin-bottom: 30px;
        font-size: 3.4rem;

        @media (max-width: 640px) {
          margin-bottom: 20px;
          font-size: 2.4rem;
        }
      }

      .intro-text {
        font-size: 2.2rem;
        text-align: center;
        line-height: 1.5;

        @media (max-width: 640px) {
          font-size: 1.8rem;
        }
      }

      @media (max-width: 460px) {
        padding: 0 18px;
      }
    }
  }
`;
