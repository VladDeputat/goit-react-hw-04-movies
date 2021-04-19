import React, { Component, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Api from '../servises/Api';
import Loader from '../components/Loader/Loader';
import MovieInfo from '../components/MovieInfo/MovieInfo';
// const MovieInfo = lazy(() =>
//   import(
//     '../components/MovieInfo/MovieInfo' /* webpackChunkName:"MovieInfo" */
//   ),
// );
const MovieCast = lazy(() =>
  import(
    '../components/MovieCast/MovieCast' /* webpackChunkName:"MovieCast" */
  ),
);
const MovieRewiews = lazy(() =>
  import(
    '../components/MovieReviews/MovieReviews' /* webpackChunkName:"MovieReviews" */
  ),
);

export default class MovieDetailsPage extends Component {
  state = {
    currentMovie: {},
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      await Api.getMovieInfo(this.props.match.params.movieId).then(res =>
        this.setState({
          currentMovie: res.data,
        }),
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || '/');
  };

  render() {
    const { location, match } = this.props;

    return (
      <>
        <div>
          <button type="button" onClick={this.handleGoBack}>
            Go back
          </button>
          {this.state.isLoading && <Loader />}
          <MovieInfo movie={this.state.currentMovie} />
          <h4>Aditional information</h4>
          <ul>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              <li>Cast</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              <li>Reviews</li>
            </NavLink>
          </ul>

          <Route path={`${match.path}/cast`} component={MovieCast} />
          <Route path={`${match.path}/reviews`} component={MovieRewiews} />
        </div>
      </>
    );
  }
}
