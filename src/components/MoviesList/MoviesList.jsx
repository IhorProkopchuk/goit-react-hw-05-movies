import { Link } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  return (
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
  );
};

export default MovieList;
