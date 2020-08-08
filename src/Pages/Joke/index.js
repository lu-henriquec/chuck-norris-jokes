import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { getJoke } from '../../Services/categorieService';

import backIcon from '../../Assets/Images/back.svg';

// import { Container } from './styles';

function Joke() {
  const { category } = useParams();
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetJoke();
  }, []);

  async function handleGetJoke() {
    setLoading(true);
    const response = await getJoke(category);

    if(response) {
      const newJoke = response.data.value;

      if(newJoke === joke) {
        handleGetJoke();
        return;
      }

      setJoke(response.data.value);
      setLoading(false);
    }
  }

  return (
    <>
      <Link to="/categories" className="">
          <img src={backIcon} alt="Voltar"/>
      </Link>
      <h1>Joke: {category}</h1>

      {loading 
        ? <h2>Carregando piada...</h2>
        : <>
          <p>{joke}</p>
          <button type="button" onClick={handleGetJoke}>Ver outra piada</button>
        </>
      }
    </>
  );
}

export default Joke;