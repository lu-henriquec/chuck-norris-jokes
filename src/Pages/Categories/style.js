import styled from 'styled-components';

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 1.5rem;

  h1 {
    font-weight: 500;
    font-size: 4.2rem;
    text-align: center;
  }

  p {
    text-align: center;
  }

  ul {
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    li {
      margin: 1.2rem;
    }
  }

  @media (min-width: 700px) {
    margin: 0 auto;

    ul {
      margin-top: 5rem;

      li {
        margin: 3rem;
      }
    }
  }
`;