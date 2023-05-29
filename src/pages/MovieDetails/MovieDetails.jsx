import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';
import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetailsComponent';
import Status from 'services/status';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieDetails(movieId).then(data => {
      if (data.status_code === 34) {
        setError('An error occurred during the request.');
        setStatus(Status.REJECTED);
        return;
      }
      setMovieInfo(data);
      setStatus(Status.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      <div className={css.backLinkBtnWrap}>
        <Link className={css.backLinkBtn} to={backLinkLocation.current}>
          Go Back
        </Link>
      </div>
      {status === Status.PENDING && <div>Loading...</div>}
      {status === Status.REJECTED && <div>{error}</div>}
      {status === Status.RESOLVED && (
        <MovieDetailsComponent movie={movieInfo} />
      )}
    </>
  );
};

export default MovieDetails;
