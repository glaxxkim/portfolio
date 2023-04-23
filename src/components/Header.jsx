import { theme } from 'assets/styles/theme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const menus = ['Portfolio', 'About', 'Contact'];

const Header = () => {
  const navigate = useNavigate();

  const movePage = menu => navigate(`/${menu}`);

  return (
    <Container>
      <section className="logo" onClick={() => movePage('')}>
        <h1>GLASSKIM.</h1>
      </section>
      <nav>
        <ul>
          {menus.map(menu => (
            <li key={menu} onClick={() => movePage(menu)}>
              {menu}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  ${theme.flex('row', 'flex-end', 'space-around')};
  padding: 70px 0;

  border-bottom: 1px solid #efefef;

  .logo {
    h1 {
      font-size: 3rem;
      white-space: nowrap;
    }
  }

  nav {
    padding-bottom: 2px;
    height: 100%;

    ul {
      ${theme.flex('row', '', '', 24)}
      height: 100%;
      font-size: 1.8rem;

      li {
        letter-spacing: 1px;

        &:hover {
          text-decoration: underline;
        }
      }

      @media (max-width: 800px) {
        ${theme.flex('column', 'center', '', 16)};
      }
    }
  }

  @media (max-width: 800px) {
    ${theme.flex('column', 'center', '', 40)};
    padding: 40px 0;
  }
`;
