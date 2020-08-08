import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import backIcon from '../../Assets/Images/back.svg';

// import { Container } from './styles';

function Categories() {
  const { categories } = useSelector(state => state.categorieReducer);

  return (
    <>
      <Link to="/" className="">
          <img src={backIcon} alt="Voltar"/>
      </Link>
      <h1>Categories</h1>

      <ul>
        {categories.map( (cat, idx) => (
          <li key={idx}>
            <Link to={`/joke/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;