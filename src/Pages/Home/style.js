import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.0rem;
    font-weight: 500;
    padding: 1rem 0;
  }

  a {
    color: var(--color-secondary);
  }
`;

export const Img = styled.img`
  height: 25rem;
`;
