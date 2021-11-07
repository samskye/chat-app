import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Routes, Route } from 'react-router';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Routes>
        <Route>
          <Route
            exact
            path="/signin/*"
            element={
              <PublicRoute>
                <Route path="//*" element={<SignIn />} />
              </PublicRoute>
            }
          />
        </Route>

        <Route>
          <Route
            exact
            path="//*"
            element={
              <PrivateRoute>
                <Route path="/" element={<Home />} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </ProfileProvider>
  );
}

export default App;
