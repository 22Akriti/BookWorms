import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Georgia', 'Times New Roman', serif;
    background-color: #f5f5f5;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
