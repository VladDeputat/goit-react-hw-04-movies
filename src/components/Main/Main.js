import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import PageNotFound from '../../pages/PageNotFound';
import MovieDetails from '../MovieDetails/MovieDetails';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  );
};

export default Main;
