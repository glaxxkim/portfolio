import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div>
        <p className="email">glasskim0822@naver.com</p>
        <p>© 2023. Glasskim. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  ${theme.flex('column', 'center', 'center', 16)}
  padding: 80px 0;
  font-size: 1.6rem;

  div {
    ${theme.flex('column', 'center', '', 10)}

    .email {
      color: ${theme.color.main};
    }
  }

  @media (max-width: 500px) {
    ${theme.flex('column', 'center', '', 16)};
    padding: 60px 0 40px;
  }
`;
