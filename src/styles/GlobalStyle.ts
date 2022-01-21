import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  a {
    color: initial;
    text-decoration: none;
  }
`;