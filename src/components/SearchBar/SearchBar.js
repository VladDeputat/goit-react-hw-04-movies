import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  onHandleChange = e => {
    this.setState({ query: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onHandleSubmit}>
          <input
            className={styles.SearchFormInput}
            name="query"
            type="text"
            autoComplete="off"
            value={this.state.query}
            autoFocus
            placeholder="Search movies"
            onChange={this.onHandleChange}
          />
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
