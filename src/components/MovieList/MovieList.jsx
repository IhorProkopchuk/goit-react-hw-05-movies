import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movies => (
          <li key={movies.id}>
            <Link to={`/movies/${movies.id}`}>{movies.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
