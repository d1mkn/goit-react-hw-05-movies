import { Link, Outlet } from 'react-router-dom';
import css from './MovieDetailsComponent.module.css';

const MovieDetailsComponent = ({ movie }) => {
  const IMG_BASE = 'https://image.tmdb.org/t/p/original/';
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div>
      <div className={css.mainInfo}>
        <img
          src={
            poster_path !== null
              ? `${IMG_BASE}${poster_path}`
              : `https://placehold.co/300x450`
          }
          alt={title}
          width="300"
          height="450"
        />
        <div className="main-info__text">
          <h1>{title}</h1>
          <p>User score: {Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsComponent;
