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

    @media (max-width: 1800px) {
      font-size: 65%;
    }

    @media (max-width: 1400px) {
      font-size: 60%;
    }

    @media (max-width: 1200px) {
      font-size: 57.5%;
    }

    @media (max-width: 1000px) {
      font-size: 50%;
    }

    @media (max-width: 600px) {
      font-size: 45%;
    }
  }

  html, body {
    background: ${({ theme }) => theme.color.background};
  }

  a {
    color: initial;
    text-decoration: none;
  }

  .page {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;
    padding: 0 5rem;
  }

  .scale-animate {
    transition: transform .24s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;