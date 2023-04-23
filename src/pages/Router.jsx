import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Main from './Main';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/portfolio'} element={<Portfolio />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
