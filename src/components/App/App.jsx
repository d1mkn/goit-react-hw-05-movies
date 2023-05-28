import { NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: purple;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast"></Route>
        <Route path="/movies/:movieId/reviews"></Route>
      </Routes>
    </div>
  );
};
