import React, { Suspense, lazy, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import { getCategories } from '../Services/categorieService';
import { setCategories } from '../Store/Categories/actions';

const Home = lazy(() => import('../Pages/Home'));
const Categories = lazy(() => import('../Pages/Categories'));
const Joke = lazy(() => import('../Pages/Joke'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export default function Routes() {
  const { categories } = useSelector(state => state.categorieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!categories.length) {
      getCategoriesList();
    }
  }, []);

  async function getCategoriesList() {
    const categoriesList = await getCategories();

    if(categoriesList) {
      dispatch(setCategories(categoriesList.data))
    }
  }

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/joke/:category" exact component={Joke} />
			  <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};
