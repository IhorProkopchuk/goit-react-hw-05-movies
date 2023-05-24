import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError('Failed to fetch trending movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div>
        <h2>Trending today</h2>
        {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      </div>
    </>
  );
};

export default Home;
