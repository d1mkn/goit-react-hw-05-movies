import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieAPI';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const IMG_BASE = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  console.log(movieInfo);

  return (
    <>
      <div>
        <img
          src={`${IMG_BASE}${movieInfo.poster_path}`}
          alt={movieInfo.title}
          width="300"
          height="450"
        />
        <h1>{movieInfo.title}</h1>
        <p>User score: {movieInfo.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{movieInfo.overview}</p>
        <h2>Genres</h2>
        <p>
          {movieInfo.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </p>
      </div>
    </>
  );
}

export default MovieDetails;
