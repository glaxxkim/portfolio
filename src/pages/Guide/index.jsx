import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';

import profile from 'assets/images/main-img.png';
import { theme } from 'assets/styles/theme';

const Guide = () => {
  return (
    <Container>
      <Header />

      <section className="middle">
        <div className="img-wrapper">
          <img src={profile} alt="" />
        </div>
        <h1>Hello.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          sollicitudin condimentum fermentum. Integer lacinia, dui non fermentum
          venenatis, lacus enim suscipit ante, at bibendum leo nisi placerat
          sem.
        </p>
      </section>

      <Footer />
    </Container>
  );
};

export default Guide;

const Container = styled.div`
  .middle {
    ${theme.flex('column', 'center')}
    padding: 0 10vw;

    .img-wrapper {
      ${theme.flex()}
      margin-bottom: 30px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;

      img {
        max-width: 200%;
        object-fit: cover;
      }
    }

    h1 {
      margin-bottom: 30px;
      font-size: 3.4rem;

      @media (max-width: 640px) {
        margin-bottom: 20px;
        font-size: 2.4rem;
      }
    }

    p {
      text-align: center;
      font-size: 2.2rem;
      line-height: 1.5;

      @media (max-width: 640px) {
        font-size: 1.8rem;
      }
    }

    @media (max-width: 460px) {
      padding: 0 18px;
    }
  }
`;
