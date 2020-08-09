import React from 'react';

import logo from '../../Assets/Images/chuck-norris-logo.png';

import Button from '../../Components/Button';

import { Main, Img  } from './style';

function Home() {
  return (
    <Main>
      <Img src={logo} alt="Chuck Norris" />
      <h1>Bem vindos ao "Chuck Norris Jokes"</h1>
      <p>Aqui você terá acesso á algumas piadas do Chuck. </p>
      <Button link='/categories' label="Divirta-se" />
    </Main>
  );
}

export default Home;