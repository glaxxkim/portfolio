import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Masonry from 'components/Masonry';

/** 포트폴리오 메뉴벌 이미지 관리 */
import model from 'assets/images/model';
import product from 'assets/images/product';
import kid from 'assets/images/kids';
import oneEvent from 'assets/images/event';

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
    console.log('path', path);
    if (path === '/portfolio')
      return [...model(), ...kid(), ...oneEvent(), ...product()];
    else if (path.includes('model')) return model();
    else if (path.includes('kids')) return kid();
    else if (path.includes('event')) return oneEvent();
    else if (path.includes('product')) return product();
  }, [location.pathname]);

  const currentColumnCount = useMemo(() => (width < 800 ? 1 : 3), [width]);

  return (
    <Container>
      <Header />
      <section className={`middle ${isShow ? 'visible' : 'hidden'}`}>
        <Masonry columnCount={currentColumnCount}>
          {currentSubMenu.map((img, index) => (
            <div key={index} className="img-wrapper">
              <h2>{img.title}</h2>
              <img src={img.url} data-src={img.url} alt="" />
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
        font-size: 1.8rem;
        font-weight: 300;
        color: white;
        text-align: center;
        word-break: keep-all;
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
