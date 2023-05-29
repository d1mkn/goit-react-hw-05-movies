import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={css.navList}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  color: black;
  border: 1px solid purple;
  text-decoration: none;

  &.active {
    color: white;
    background-color: purple;
  }
`;

export default Layout;
