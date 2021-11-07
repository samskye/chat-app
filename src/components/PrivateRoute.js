import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (!profile) {
    return <Navigate to="/signin" />;
  }
  return (
    <Routes>
      <Route {...routeProps}>{children}</Route>{' '}
    </Routes>
  );
};

export default PrivateRoute;
