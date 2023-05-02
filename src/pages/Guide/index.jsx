import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { guideList } from './guideList';
import React, { useEffect, useState } from 'react';

const Guide = () => {
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
        <h1>Shooting Guide</h1>
        <ul>
          {guideList.map(({ title, price }, idx) => (
            <React.Fragment key={idx}>
              <li>
                <span>{title}</span>
                <span className="price">{price.toLocaleString()} 원</span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </section>

      <Footer />
    </Container>
  );
};

export default Guide;

const Container = styled.div`
  .middle {
    ${theme.flex('column', 'center')};
    padding: 0 10vw;

    h1 {
      margin-bottom: 40px;
      font-size: 3.4rem;

      @media (max-width: 640px) {
        margin-bottom: 30px;
        font-size: 2.4rem;
      }
    }

    ul {
      ${theme.flex('column', '', '', 18)};

      li {
        ${theme.flex('row', '', 'space-between')};
        padding: 18px 24px;
        min-width: 500px;
        font-size: 1.6rem;
        border: 1px solid #dedede;
        border-radius: 10px;

        .price {
          margin-left: 40px;
          color: #416bf7;
        }

        @media (max-width: 640px) {
          ${theme.flex('column', 'center', '', 10)};
          padding: 14px 0;
          width: 90vw;
          min-width: 300px;
          font-size: 1.4rem;

          .price {
            margin: 0;
            font-weight: bold;
          }
        }
      }
    }

    @media (max-width: 460px) {
      padding: 0 18px;
    }
  }
`;
