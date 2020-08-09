import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../Assets/Images/back.svg';
import logo from '../../Assets/Images/chuck-norris-logo.png';

import { Content } from './style';

function Header({ link }) {
  return (
    <header>
      <Content>
        <Link to={link}>
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logo} alt="Chuck Norris" />
      </Content>
    </header>
  );
}

export default Header;