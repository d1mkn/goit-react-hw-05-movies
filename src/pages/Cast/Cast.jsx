import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movieAPI';
import Status from 'services/status';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState({});
  const [status, setStatus] = useState(Status.IDLE);

  const { movieId } = useParams();

  const IMG_BASE = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieCast(movieId).then(data => {
      setCast(data.cast);
      setStatus(Status.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <div>Loading...</div>}
      {status === Status.RESOLVED && (
        <ul className={css.castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li className={css.castItem} key={id}>
              <img
                className={css.castImg}
                src={
                  profile_path !== null
                    ? `${IMG_BASE}${profile_path}`
                    : `https://placehold.co/100x150`
                }
                alt={name}
                width={100}
              />
              <div>
                <p className={css.cardText}>{name}</p>
                <p className={css.cardText}>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
