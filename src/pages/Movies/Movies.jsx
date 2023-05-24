import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../api/api';
import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMoviesByQuery(query);
        if (results.length === 0) {
          window.alert('Movie not found');
        } else {
          setMovies(results);
        }
      } catch (error) {
        console.error(error);
        setMovies([]);
      }
    };
    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Search onSubmit={handleSubmit} />
      <ul>
        <MovieList movies={movies} />
      </ul>
    </>
  );
};

export default Movies;
