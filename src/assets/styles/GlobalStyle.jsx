import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {
    font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    box-sizing: border-box;
  }

  p {
    word-break: break-all;
  }

  html {
    font-size: 10px;
  }

  body {
    max-width: 100%;
    -webkit-text-size-adjust: none;
    background-color: white;
  }

  blockquote,
  body,
  button,
  code,
  dd,
  div,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  pre,
  select,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }
  fieldset,
  img {
    border: 0;
  }
  dl,
  li,
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }
  button,
  input,
  select,
  textarea {
    vertical-align: middle;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: 0;
  }
  input[type='checkbox']:checked::after {
    display: block;
  }
  textarea,
  input[type='button'],
  input[type='email'],
  input[type='password'],
  input[type='reset'],
  input[type='search'],
  input[type='submit'],
  input[type='tel'],
  input[type='text'],
  input[type='number'] {
    border: 0;
    border-radius: 0;
    outline: 0;
  }
  input[type='search']::-webkit-search-cancel-button,
  progress {
    -webkit-appearance: none;
  }
  hr {
    margin: 0;
    border: 0;
  }
  a,
  a:active,
  a:hover,
  a:visited {
    text-decoration: none;
    color: #000;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: 400;
  }
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
