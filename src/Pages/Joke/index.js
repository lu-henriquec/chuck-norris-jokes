import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getJoke } from '../../Services/categorieService';
import Header from '../../Components/Header';

import { Content, Main } from './style';

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
    <Content>
      <Header link='/categories'/>
      <Main>
        <h1>Categoria: {category}</h1>

        {loading 
          ? <h2>Carregando piada...</h2>
          : <>
            <p>{joke}</p>
            <button type="button" onClick={handleGetJoke}>Ver outra piada</button>
          </>
        }
      </Main>
    </Content>
  );
}

export default Joke;