import styles from './MovieInfo.module.scss';
import noImg from '../../img/noImg.jpg';
const MovieInfo = ({ movie }) => {
  const {
    poster_path,
    name,
    title,
    release_date,
    genres = [],
    vote_average,
    overview,
  } = movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default MovieInfo;
