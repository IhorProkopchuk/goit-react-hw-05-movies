import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api/api';
import { Loader } from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError('Error fetching movie reviews. Please try again later.');
      } finally { 
        setLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length > 0
        ? (<ul> {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}</ul>)
        : (<h2>We don't have any reviews for this movie</h2>)}
    </>
  );
};

export default Reviews;