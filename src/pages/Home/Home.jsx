import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../../api/api';
import MoviesList from '../../components/MoviesList/MoviesList';
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
        <MoviesList trendingMovies={trendingMovies} />
      </div>
    </>
  );
};

export default Home;