import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api/api';
import { Loader } from '../Loader/Loader';

import imageNotFound from '../Cast/No_image.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError('Error fetching movie cast. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  const handleImageError = event => {
    event.target.src = imageNotFound;
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Cast</h2>
            <ul>
              {cast.map(({ name, character, profile_path }) => (
                <li key={name}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : imageNotFound
                    }
                    onError={handleImageError}
                    width="200"
                    alt={name}
                  />
                  <h2>{name}</h2>
                  <p>Character: {character}</p>
                </li>
              ))}
            </ul>
    </>
  );
};

export default Cast;
