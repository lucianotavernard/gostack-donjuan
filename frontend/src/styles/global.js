import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fafafa;
    font: 14px Helvetica, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%
  }

  #root {
    background-color: white;
  }

  input, button {
    font-family: Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
