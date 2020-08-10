import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

import { getJoke } from '../../Services/categorieService';
import Header from '../../Components/Header';

import { Content, Main } from './style';

// import { Container } from './styles';

function Joke() {
  const { category } = useParams();
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const handleGetJoke = useCallback( async () => {
    console.log('handleGetJoke')
    setLoading(true);
    const response = await getJoke(category);

    if(response) {
      setJoke(response.data.value);
      setLoading(false);
    }
  }, [category]);
  
  useEffect(() => {
    handleGetJoke();
  }, [handleGetJoke]);


  // async function handleGetJoke() {
  //   console.log('handleGetJoke')
  //   setLoading(true);
  //   const response = await getJoke(category);

  //   if(response) {
  //     setJoke(response.data.value);
  //     setLoading(false);
  //   }
  // }

  return (
    <Content>
      <Header link='/categories'/>
      <Main>
        <h1>{category}</h1>

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