import React, { Component } from 'react';
import Api from '../../servises/Api';
import styles from './MovieCast.module.scss';

export default class MovieCast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    try {
      await Api.getMovieCast(this.props.match.params.movieId).then(res =>
        this.setState({ cast: res.data.cast }),
      );
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  render() {
    return (
      <div className={styles.castConteiner}>
        {this.state.cast.map(actor => (
          <div className={styles.actorCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            ></img>
            <p className={styles.actorName}>{actor.name}</p>
            <p className={styles.actorCharacter}>
              Character - {actor.character}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
