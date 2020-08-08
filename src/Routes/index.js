import React, { Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Categories = lazy(() => import('../Pages/Categories'));
const Joke = lazy(() => import('../Pages/Joke'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export default function Routes() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/joke" exact component={Joke} />
			  <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};
