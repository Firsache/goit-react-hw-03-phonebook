import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    font-style: normal;
    /* color: #545454; */
    background-color: #F7F7F7;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    padding: 0;
    border: none;
    font-family: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
