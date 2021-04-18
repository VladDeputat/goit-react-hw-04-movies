import React, { Component } from 'react';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MovieList/MoviesList';
import API from '../servises/Api';

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getMovies();
    this.setState({ isLoading: false });
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
        {!this.state.isLoading && <h1>Tranding today</h1>}
        {this.state.isLoading && <Loader />}
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
