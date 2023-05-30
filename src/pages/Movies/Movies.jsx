import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesPageComponent from 'components/MoviesForm/MovieForm';
import Status from 'services/status';
import { searchMovieByWord } from 'services/movieAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    queryParams !== null && setQuery(queryParams);
    if (query === '') return;
    setStatus(Status.PENDING);
    searchMovieByWord(query).then(data => {
      if (data.total_results === 0) {
        setError('Movies matching your search were not found.');
        setStatus(Status.REJECTED);
        return;
      }
      setMovies(data.results);
      setStatus(Status.RESOLVED);
    });
  }, [query, queryParams]);

  const searchMovies = newQuery => {
    if (query === newQuery) return;
    setSearchParams({ query: newQuery });
    setQuery(newQuery);
    setMovies(null);
    setError(null);
    setStatus(Status.IDLE);
  };
  return (
    <>
      <MoviesPageComponent onHandleSubmit={searchMovies} value={query} />
      {status === Status.REJECTED && <div>{error}</div>}
      {status === Status.RESOLVED && (
        <MoviesList data={movies} location={location} />
      )}
    </>
  );
};

export default Movies;
