import { getTrendingMovies } from 'services/movieAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setTrendingMovies(response.results));
  });

  return (
    <main>
      <h1>Tranding today</h1>
      <MoviesList data={trendingMovies} />
    </main>
  );
};

export default MainPage;
