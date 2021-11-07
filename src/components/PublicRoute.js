import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (profile && !isLoading) {
    return <Navigate to="/" />;
  }
  return (
    <Routes>
      <Route {...routeProps}>{children}</Route>{' '}
    </Routes>
  );
};

export default PublicRoute;
