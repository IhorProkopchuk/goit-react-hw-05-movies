import { Suspense } from 'react';
import { useRef, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMoviesById } from '../../api/api';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Loader } from '../../components/Loader/Loader';

import styles from '../../pages/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMoviesById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <button type="button" className={styles.btn}>
          &#10096; Go back
        </button>
      </Link>
      <MovieCard movie={selectedMovie || {}} />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link className={styles.movieInfoLink} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={styles.movieInfoLink} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;