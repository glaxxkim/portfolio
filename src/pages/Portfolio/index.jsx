import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Masonry from 'components/Masonry';

/** 포트폴리오 메뉴벌 이미지 관리 */
import model from 'pages/Portfolio/model';
import product from 'pages/Portfolio/product';

const Portfolio = () => {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    return () => {
      setIsShow(false);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => setWidth(window.innerWidth);

  const currentSubMenu = useMemo(() => {
    const path = location.pathname;

    if (path === '/portfolio') return [...model, ...product];
    else if (path.includes('model')) return model;
    else if (path.includes('product')) return product;
  }, [location.pathname]);

  const currentColumnCount = useMemo(() => {
    if (width < 600) return 1;
    if (width < 800) return 2;
    return 3;
  }, [width]);

  return (
    <Container>
      <Header />
      <section className={`middle ${isShow ? 'visible' : 'hidden'}`}>
        <Masonry columnCount={currentColumnCount}>
          {currentSubMenu.map((img, index) => (
            <div key={index} className="img-wrapper">
              <h2>{img.title}</h2>
              <img src={img.src} data-src={img.src} alt="" />
            </div>
          ))}
        </Masonry>
      </section>
      <Footer />
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  .middle {
    ${theme.flex('column', 'center')}
    padding: 0 10vw;

    .img-wrapper {
      position: relative;

      h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.2s;
        font-size: 2rem;
        color: white;
        word-break: break-all;
        z-index: 1;
      }

      img {
        max-width: 500px;
        transition: filter 0.2s;
      }

      &:hover img {
        filter: brightness(0.3);
      }

      &:hover h2 {
        opacity: 1;
      }
    }

    @media (max-width: 460px) {
      padding: 0 18px;
    }
  }
`;
