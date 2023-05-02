import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Portfolio from './Portfolio';
import Guide from './Guide';
import Contact from './Contact';
import Main from './Main';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/portfolio/*'} element={<Portfolio />} />
          <Route path={'/guide'} element={<Guide />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
