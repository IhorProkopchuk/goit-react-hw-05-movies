import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../api/api';
import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();


  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const { results } = await fetchMoviesByQuery(query);
        if (results.length === 0) {
          window.alert('Movie not found');
        } else {
          setMovies(results);
        }
      } catch (error) {
        setError('An error occurred while fetching movies.');
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [searchParams]);

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <p>{error}</p>;
    }

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Search onSubmit={handleSubmit} />
      <ul>
        {movies.length > 0 && (
          <MovieList movies={movies} state={{ from: location }} />
        )}
      </ul>
    </>
  );
};

export default Movies;
