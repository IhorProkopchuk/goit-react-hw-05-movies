import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

const Search = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (!query) {
      window.alert('Please enter a movie to search');
    }
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          name="query"
          type="text"
          placeholder="Search for a movie"
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
