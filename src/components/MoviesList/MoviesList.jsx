import { Link } from 'react-router-dom';

const MoviesList = ({ data, location }) => {
  return (
    <div>
      <ul>
        {data.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
          >
            <li>{movie.original_title || movie.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
