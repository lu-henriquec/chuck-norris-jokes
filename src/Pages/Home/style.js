import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.0rem;
    padding: 1rem 0;
  }

  a {
    color: #FFF;
    background: #000;
    color: #FFF;
    padding: .4rem 0;
    transition: background .2s;
    font-size: 2rem;
    text-decoration: none;
    padding: 1rem;

    &:hover {
      background: rgba(0, 0, 0, .6);
    }
  }

  p {
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;

export const Img = styled.img`
  height: 25rem;
`;
