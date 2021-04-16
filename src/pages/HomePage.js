import React, { Component } from 'react';
import MoviesList from '../components/MovieList/MoviesList';
import API from '../servises/Api';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    API.getTrending().then(res => {
      this.setState({
        movies: res.data.results,
      });
    });
  };

  render() {
    return (
      <>
        <h1>Tranding today</h1>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
