import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <Link to='/categories'>Categories</Link>
    </>
  );
}

export default Home;