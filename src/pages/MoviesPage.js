import React, { Component } from 'react';
import API from '../servises/Api';
import MoviesList from '../components/MovieList/MoviesList';
import SearchBar from '../components/SearchBar/SearchBar';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleSubmit = query => {
    API.searcMovies(query).then(res =>
      this.setState({
        movies: res.data.results,
      }),
    );
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
