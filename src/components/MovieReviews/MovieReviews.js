import React, { Component } from 'react';
import Api from '../../servises/Api';
import {
  reviewsConteiner,
  reviewAuthor,
  reviewsContent,
} from './MovieReviews.module.scss';

export default class MovieRewiews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    try {
      await Api.getMovieReviews(this.props.match.params.movieId).then(res =>
        this.setState({ reviews: res.data.results }),
      );
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  render() {
    return (
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
    );
  }
}
