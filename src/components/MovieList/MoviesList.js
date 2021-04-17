import { NavLink } from 'react-router-dom';
import {
  movieList,
  movieListItem,
  movieTitle,
  movieImg,
} from './MovieList.module.scss';
import noImg from '../../img/noImg.jpg';

const MoviesList = ({ movies }) => (
  <ul className={movieList}>
    {movies.map(({ poster_path, title, name, id }) => (
      <li key={id} className={movieListItem}>
        <NavLink to={`/movies/${id}`}>
          <img
            className={movieImg}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noImg
            }
            alt={name || title}
          />
          <p className={movieTitle}>{name || title}</p>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default MoviesList;
