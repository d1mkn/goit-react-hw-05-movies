import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesPageComponent from 'components/MoviesForm/MovieForm';
import Status from 'services/status';
import { searchMovieByWord } from 'services/movieAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (!queryParams) return;
    setStatus(Status.PENDING);
    searchMovieByWord(queryParams).then(data => {
      if (data.total_results === 0) {
        setError('Movies matching your search were not found.');
        setStatus(Status.REJECTED);
        return;
      }
      setMovies(data.results);
      setStatus(Status.RESOLVED);
    });
  }, [queryParams]);

  const searchMovies = newQuery => {
    if (queryParams === newQuery) return;
    setSearchParams({ query: newQuery });

    setMovies(null);
    setError(null);
    setStatus(Status.IDLE);
  };

  return (
    <>
      <MoviesPageComponent onHandleSubmit={searchMovies} />
      {status === Status.REJECTED && <div>{error}</div>}
      {status === Status.RESOLVED && (
        <MoviesList data={movies} location={location} />
      )}
    </>
  );
};

export default Movies;
