import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api/api';
import { Loader } from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map(({ author, content, id }) => (
                <li key={id}>
                  <h2>{author}</h2>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <h2>We don't have any reviews for this movie</h2>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;