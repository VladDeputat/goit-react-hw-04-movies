import { NavLink } from 'react-router-dom';
import { movieList, movieListItem, movieTitle } from './MovieList.module.scss';

const MoviesList = ({ movies }) => (
  <ul className={movieList}>
    {movies.map(({ poster_path, title, name, id }) => (
      <li key={id} className={movieListItem}>
        <NavLink to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={name || title}
          />
          <p className={movieTitle}>{name || title}</p>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default MoviesList;
