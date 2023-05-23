import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../../api/api';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetchTrendMovies();
        const { results } = response;
        setTrendingMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>Trending today</h2>
          <ul>
            {trendingMovies.map(trendingMovie => (
              <li key={trendingMovie.id}>
                <Link to={`/movies/${trendingMovie.id}`}>
                  {trendingMovie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
