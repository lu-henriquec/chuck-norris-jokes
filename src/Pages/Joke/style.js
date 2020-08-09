import styled from 'styled-components';

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 2.5rem;

  h1 {
    font-weight: 500;
    font-size: 4.4rem;
    text-align: center;
  }

  p, h2 {
    margin: 1.6rem 0;
    color: #FFF;
    text-align: center;
  }

  p {
    padding: 2rem;
    background: #000;
    font-size: 2.4rem;
  }

  button {
    background: none;
    border: 0;
    border-bottom: 1px solid #000; 
    margin-top: 2.8rem;
    font: 500 1.6rem "Courier New", Arial, sans-serif;
    cursor: pointer;
    outline: none;
    color: #000;
  }

  @media (min-width: 700px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;