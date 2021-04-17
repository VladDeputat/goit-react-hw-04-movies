import React, { Component } from 'react';
import Api from '../../servises/Api';
import Loader from '../Loader/Loader';
import {
  reviewsConteiner,
  reviewAuthor,
  reviewsContent,
} from './MovieReviews.module.scss';

export default class MovieRewiews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const id = this.props.match.params.movieId;
      await Api.getMovieReviews(id).then(res =>
        this.setState({ reviews: res.data.results }),
      );
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.reviews.length === 0 && <h1>No reviews yet ¯\_(ツ)_/¯</h1>}
        <div className={reviewsConteiner}>
          <ul>
            {this.state.reviews.map(({ author, content }) => (
              <li key={author}>
                <h4 className={reviewAuthor}>{author}</h4>
                <p className={reviewsContent}>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
