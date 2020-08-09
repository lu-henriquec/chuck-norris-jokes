import styled from 'styled-components';

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 2.5rem;

  h1 {
    font-weight: 500;
    font-size: 3rem;
  }

  p, h2 {
    margin: 1.6rem 0;
  }

  button {
    background: none;
    border: 0;
    border-bottom: 1px solid var(--color-primary); 
    margin-top: 1.8rem;
    font: 500 1.6rem "Courier New", Arial, sans-serif;
    cursor: pointer;
    outline: none;
  }
`;