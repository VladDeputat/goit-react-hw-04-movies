import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../servises/Api';
import MoviesList from '../components/MovieList/MoviesList';
import SearchBar from '../components/SearchBar/SearchBar';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    const propSearch = this.props.location.search;
    const search = queryString.parse(propSearch);
    try {
      propSearch &&
        API.searcMovies(search.query).then(res =>
          this.setState({
            movies: res.data.results,
          }),
        );
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = query => {
    API.searcMovies(query).then(res =>
      this.setState({
        movies: res.data.results,
      }),
    );
    this.props.history.push({
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default withRouter(MoviesPage);
