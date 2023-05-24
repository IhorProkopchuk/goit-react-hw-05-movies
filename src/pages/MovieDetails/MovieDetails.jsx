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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      setLoading(true);
      setError(null);
      try {
        const movieData = await fetchMoviesById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchSelectedMovie(movieId);
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <button type="button" className={styles.btn}>
          &#10096; Go back
        </button>
      </Link>
      <MovieCard movie={selectedMovie} />
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