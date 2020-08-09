import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700');

  :root {
    --color-background: #F0F0F7;
    --color-primary: #c00611;
    --color-secondary: #ff5003;
    --color-title-in-primary: #FFFFFF;
    --color-text-complement: #9C98A6;
    --color-text-base: #222;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: var(--color-background);
    font: 16px/1.5 "Courier New", Arial, sans-serif;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    color: var(--color-text-base);
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
