import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #EBD8FF;
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #8c70cc;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
