import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesPageComponent from 'components/MoviesPageComponent/MoviesPageComponent';
import Status from 'services/status';
import { searchMovieByWord } from 'services/movieAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const [searchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  useEffect(() => {
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
  }, [query]);

  const searchMovies = newQuery => {
    if (query === newQuery) return;
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
