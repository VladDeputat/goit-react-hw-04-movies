import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '7950de2c1b714d7ba622958973a8f3d9';

export default {
  getTrending() {
    return axios.get(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
  },

  searcMovies(query = '') {
    return axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
  },

  getMovieInfo(id) {
    return axios.get(`
    ${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`);
  },

  getMovieCast(id) {
    return axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`,
    );
  },

  getMovieReviews(id) {
    return axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
    );
  },
};

// const links = {
//   popular:
//     '${BASE_URL}trending/all/day?api_key=${KEY}',
//   searchMovies:
//     '${BASE_URL}search/movie?${KEY}&language=en-US&query={query}&page=1&include_adult=false',
//   info:
//     '${BASE_URL}movie/{movie_id}?api_key=${KEY}&language=en-US',
//   cast:
//     '${BASE_URL}movie/{movie_id}/credits?api_key=${KEY}&language=en-US',
//   reviews:
//     '${BASE_URL}movie/{movie_id}/reviews?api_key=${KEY}&language=en-US&page=1',
// };
