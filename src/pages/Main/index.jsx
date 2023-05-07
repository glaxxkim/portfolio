import { theme } from 'assets/styles/theme';
import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';

import mainSrc from 'assets/images/landing_bg.jpg';
import { useEffect, useState } from 'react';

const Main = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    return () => {
      setIsShow(false);
    };
  }, []);

  return (
    <Container isShow={isShow}>
      <Header />
      <section className={`middle ${isShow ? 'visible' : 'hidden'}`}>
        <img src={mainSrc} alt="" />
        <div className="main-intro">
          <h1 className="intro-title">ABOUT GLAXXKIM</h1>
          <p className="intro-text spoqa">
            포토그래퍼 김유리 입니다.
            <br />
            <br />
            패션 의류 및 잡화 모델 촬영, 제품사진 촬영, 스냅 촬영, 기업 행사
            촬영, 스튜디오 촬영, 야외 촬영, 사진 보정 작업 등 원하시는 컨셉에
            맞게 촬영 해드립니다.
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

  .middle {
    ${theme.flex('column', 'center', '', 100)};

    img {
      width: 100%;
    }

    .main-intro {
      padding: 0 180px;
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
        max-width: 800px;
        font-size: 2.2rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.5;
        word-break: keep-all;

        @media (max-width: 640px) {
          font-size: 1.8rem;
        }
      }

      @media (max-width: 800px) {
        padding: 0 60px;
      }

      @media (max-width: 460px) {
        padding: 0 18px;
      }
    }

    @media (max-width: 800px) {
      gap: 60px;
    }
  }
`;
