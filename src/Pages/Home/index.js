import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Images/chuck-norris-logo.png';

import { Main, Img  } from './style';

function Home() {
  return (
    <Main>
      <Img src={logo} alt="Chuck Norris" />
      <h1>Chuck Norris Jokes</h1>
      <Link to='/categories'>Divirta-se</Link>
    </Main>
  );
}

export default Home;