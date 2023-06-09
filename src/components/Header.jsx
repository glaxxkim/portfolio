import { theme } from 'assets/styles/theme';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDropdownShow, setIsDropdownShow] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobileSize = useMemo(() => width < 801, [width]);

  const handleResize = () => setWidth(window.innerWidth);

  const movePage = menu => window.location.replace(`/${menu}`);

  return (
    <Container>
      <section className="logo" onClick={() => movePage('')}>
        <h1 className="pointer">GLAXXKIM</h1>
      </section>
      <nav onMouseLeave={() => !isMobileSize && setIsDropdownShow(false)}>
        <div
          className="menu pointer"
          onMouseEnter={() => !isMobileSize && setIsDropdownShow(true)}
          onClick={() => movePage('portfolio')}
        >
          Portfolio
        </div>
        {(isMobileSize || isDropdownShow) && (
          <ul className="dropdown">
            <li className="pointer" onClick={() => movePage('portfolio/model')}>
              Model
            </li>
            {!isMobileSize && <li className="line">|</li>}
            <li className="pointer" onClick={() => movePage('portfolio/kids')}>
              Kids
            </li>
            {!isMobileSize && <li className="line">|</li>}
            <li className="pointer" onClick={() => movePage('portfolio/event')}>
              Event
            </li>
            {!isMobileSize && <li className="line">|</li>}
            <li
              className="pointer"
              onClick={() => movePage('portfolio/product')}
            >
              Product
            </li>
          </ul>
        )}
        <div className="menu pointer" onClick={() => movePage('guide')}>
          Guide
        </div>
        <div className="menu pointer" onClick={() => movePage('contact')}>
          Contact
        </div>
      </nav>
    </Container>
  );
};

export default React.memo(Header);

const Container = styled.header`
  ${theme.flex('row', 'flex-end', 'space-around')};
  padding: 70px 0;

  .logo {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }

    h1 {
      font-size: 4rem;
      white-space: nowrap;
    }
  }

  nav {
    position: relative;
    ${theme.flex('row', '', '', 24)};
    padding-bottom: 4px;
    height: 100%;
    font-size: 1.8rem;

    .menu {
      letter-spacing: 1px;

      &:hover {
        text-decoration: underline;
      }
    }

    .dropdown {
      position: absolute;
      left: 0;
      bottom: -46px;
      ${theme.flex()}
      font-size: 1.6rem;

      li {
        padding: 14px;
        padding-left: 0;
        font-size: 1.5rem;
        font-weight: 300;
        color: #9a9a9a;

        &:hover {
          text-decoration: underline;
        }
      }

      .line {
        color: #dedede;
      }
    }

    @media (max-width: 800px) {
      ${theme.flex('column', 'center', '', 16)};

      .dropdown {
        position: static;
        margin-top: -8px;
        ${theme.flex('column', '', '', 6)}

        li {
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 800px) {
    ${theme.flex('column', 'center', '', 40)};
    margin-bottom: 40px;
    padding: 40px 0 0;
  }
`;
