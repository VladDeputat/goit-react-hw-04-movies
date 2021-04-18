import { NavLink, withRouter } from 'react-router-dom';
import {
  movieList,
  movieListItem,
  movieTitle,
  movieImg,
  imgContainer,
} from './MovieList.module.scss';
import noImg from '../../img/noImg.jpg';

const MoviesList = ({ movies, location }) => (
  <ul className={movieList}>
    {movies.map(({ poster_path, title, name, id }) => (
      <li key={id} className={movieListItem}>
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: location,
            },
          }}
        >
          <div className={imgContainer}>
            <img
              className={movieImg}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImg
              }
              alt={name || title}
            />
          </div>
          <p className={movieTitle}>{name || title}</p>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(MoviesList);
