import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api/api';
import { Loader } from '../Loader/Loader';

import imageNotFound from '../Cast/No_image.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  const handleImageError = event => {
    event.target.src = imageNotFound;
  };

  return (
    <>
      <h2>Cast</h2>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {cast.map(({ name, character, profile_path }) => (
            <li key={name}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={profile_path ? 'actor' : 'No Image'}
                width={200}
                onError={handleImageError}
              />
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
