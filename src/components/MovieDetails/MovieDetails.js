import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Api from '../../servises/Api';
import Loader from '../Loader/Loader';
import styles from './MovieDetails.module.scss';
import noImg from '../../img/noImg.jpg';
const MovieCast = lazy(() =>
  import('../MovieCast/MovieCast' /* webpackChunkName:"MovieCast" */),
);
const MovieRewiews = lazy(() =>
  import('../MovieReviews/MovieReviews' /* webpackChunkName:"MovieReviews" */),
);

export default class MovieDetails extends Component {
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
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || '/');
  };

  render() {
    const {
      poster_path,
      name,
      title,
      release_date,
      genres = [],
      vote_average,
      overview,
    } = this.state.currentMovie;
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
      <>
        {this.state.isLoading && <Loader />}
        <div className={styles.container}>
          <button
            type="button"
            className={styles.goBackBtn}
            onClick={this.handleGoBack}
          >
            Go back
          </button>
          <div className={styles.movieContainer}>
            <div className={styles.imgContainer}>
              <img src={poster_path ? poster : noImg} alt={name || title} />
            </div>
            <div className={styles.infoContainer}>
              <h2>
                {name || title} ({release_date})
              </h2>
              <p>User score: {vote_average * 10 + '%'}</p>
              <h3>Overview:</h3>
              <p>{overview}</p>
              {genres.length !== 0 && <h3>Genres:</h3>}
              {genres.map(genre => (
                <span key={genre.id}> {genre.name}</span>
              ))}
            </div>
          </div>
          <h4>Aditional information</h4>
          <ul>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: {
                  from: this.props.location.state.from,
                },
              }}
            >
              <li className={styles.adInfoListItem}>Cast</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: {
                  from: this.props.location.state.from,
                },
              }}
            >
              <li className={styles.adInfoListItem}>Reviews</li>
            </NavLink>
          </ul>
          <Suspense fallback={<Loader />}>
            <Route
              path={`${this.props.match.path}/cast`}
              component={MovieCast}
            />
            <Route
              path={`${this.props.match.path}/reviews`}
              component={MovieRewiews}
            />
          </Suspense>
        </div>
      </>
    );
  }
}
