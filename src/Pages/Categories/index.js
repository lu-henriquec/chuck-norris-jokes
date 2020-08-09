import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header';
import { Main, Content } from './style';

function Categories() {
  const { categories } = useSelector(state => state.categorieReducer);

  return (
    <Content>
      <Header link="/" />
      
      <Main>
        <h1>Categorias:</h1>

        <ul>
          {categories.map( (cat, idx) => (
            <li key={idx}>
              <Link to={`/joke/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </Main>
    </Content>
  );
}

export default Categories;