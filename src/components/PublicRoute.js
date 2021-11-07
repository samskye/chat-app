import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (profile) {
    return <Navigate to="/" />;
  }
  return (
    <Routes>
      <Route {...routeProps}>{children}</Route>{' '}
    </Routes>
  );
};

export default PublicRoute;
