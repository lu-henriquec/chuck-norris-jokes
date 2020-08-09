import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Images/chuck-norris-logo.png';

import { Main } from './style';

function NotFound() {
  return (
    <Main>
        <img src={logo} alt="Chuck Norris" />
        <p>Ops... Não encontramos o que você procurou.</p>
        <Link to="/">Ir para Home</Link>
    </Main>
  );
}

export default NotFound;