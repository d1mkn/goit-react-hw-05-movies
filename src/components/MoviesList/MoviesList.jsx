import { Link } from 'react-router-dom';

function MoviesList({ data }) {
  return (
    <div>
      <ul>
        {data.map(movie => (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            <li>{movie.original_title || movie.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
