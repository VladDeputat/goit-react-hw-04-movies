import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import Api from '../../servises/Api';
import styles from './MovieCast.module.scss';
import noPhoto from '../../img/noPhoto.png';

export default class MovieCast extends Component {
  state = {
    cast: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const id = this.props.match.params.movieId;
      await Api.getMovieCast(id).then(res =>
        this.setState({ cast: res.data.cast }),
      );
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.cast.length === 0 && <h1>No information ¯\_(ツ)_/¯</h1>}
        <div className={styles.castConteiner}>
          {this.state.cast.map(actor => (
            <div className={styles.actorCard}>
              <img
                className={styles.actorPhoto}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : noPhoto
                }
                alt={actor.name}
              ></img>
              <p className={styles.actorName}>{actor.name}</p>
              <p className={styles.actorCharacter}>
                Character - {actor.character}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
