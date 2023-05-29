import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import Status from 'services/status';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setState] = useState(Status.IDLE);
  const location = useLocation();

  useEffect(() => {
    setState(Status.PENDING);
    getTrendingMovies().then(response => {
      setTrendingMovies(response.results);
      setState(Status.RESOLVED);
    });
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      {status === Status.PENDING && <div>Loading...</div>}
      {status === Status.RESOLVED && (
        <MoviesList data={trendingMovies} location={location} />
      )}
    </>
  );
};

export default MainPage;
