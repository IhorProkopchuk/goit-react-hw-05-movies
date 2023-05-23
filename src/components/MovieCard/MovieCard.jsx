import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.module.css';
import imageNotFound from '../Cast/No_image.png';

const MovieCard = ({ movie }) => {
  const { title, genres, release_date, overview, vote_average, poster_path } =
    movie;
  const releaseDate = release_date ? new Date(release_date).getFullYear() : '';
  const userScore = vote_average ? ((vote_average / 10) * 100).toFixed(0) : '';
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : imageNotFound;

  return (
    <div className={styles.cardContainer}>
      <img src={imgUrl} alt={title} />
      <div>
        <h1>
          {title} {releaseDate && `(${releaseDate})`}
        </h1>
        {userScore && <p>User score: {userScore}%</p>}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && genres.length > 0
          ? (<ul>{genres.slice(0, 3).map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}</ul>)
          : (<p>Unknown</p>)}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieCard;