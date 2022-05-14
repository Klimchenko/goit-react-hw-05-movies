import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink, Header } from './Navigation.styled';
import Loader from '../Loader/Loader';

export default function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
