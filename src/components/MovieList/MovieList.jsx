import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieList;
