import { theme } from 'assets/styles/theme';
import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Header />

      <section className="middle">
        <h1>SNS? 이메일? 컨택 방식</h1>
      </section>

      <Footer />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  .middle {
    ${theme.flex('column', 'center')}
    padding: 0 10vw;

    h1 {
      text-align: center;
      font-size: 3rem;
    }

    @media (max-width: 460px) {
      padding: 0 18px;
    }
  }
`;
