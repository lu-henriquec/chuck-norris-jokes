import React from 'react';
import { useSelector} from 'react-redux';

import Header from '../../Components/Header';
import Button from '../../Components/Button';

import { Main, Content } from './style';

function Categories() {
  const { categories } = useSelector(state => state.categorieReducer);

  return (
    <Content>
      <Header link="/" />
      
      <Main>
        <h1>Categorias</h1>
        <p>Selecione uma categoria para ver uma piada</p>

        <ul>
          {categories.map( (cat, idx) => (
            <li key={idx}>
              <Button link={`/joke/${cat}`} label={cat} />
            </li>
          ))}
        </ul>
      </Main>
    </Content>
  );
}

export default Categories;