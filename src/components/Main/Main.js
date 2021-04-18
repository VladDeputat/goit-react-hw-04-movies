import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const HomePage = lazy(() =>
  import('../../pages/HomePage.js' /* webpackChunkName:"HomePage" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage.js' /* webpackChunkName:"MoviesPage" */),
);
const MovieDetails = lazy(() =>
  import(
    '../MovieDetails/MovieDetails.js'
    /* webpackChunkName:"MovieDetails" */
  ),
);

const Main = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
