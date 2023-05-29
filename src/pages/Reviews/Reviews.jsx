import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';
import Status from 'services/status';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const [status, setStatus] = useState(Status.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      if (data.results.length <= 0) {
        setStatus(Status.REJECTED);
        return;
      }
      setReviews(data.results);
      setStatus(Status.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <div>Loading...</div>}
      {status === Status.REJECTED && <p>No one has left a review yet.</p>}
      <ul className={css.reviewList}>
        {status === Status.RESOLVED &&
          reviews.length > 0 &&
          reviews.map(({ author, content, id }) => (
            <li key={id} className={css.reviewItem}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
