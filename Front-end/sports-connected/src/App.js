import React from 'react';
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard';
import UnauthorizedAccess from './components/unauthorizedaccess';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/navbar';
import ProfilePage from './components/profilepage';
import { useSelector } from 'react-redux';

function AllowDashboardAccess() {
  const { isLoggedIn } = useSelector(state => state.user);

  if (isLoggedIn) {
    return <Dashboard />
  }

  return <UnauthorizedAccess />
}

function AllowProfileAccess() {
  const { isLoggedIn } = useSelector(state => state.user);

  if (isLoggedIn) {
    return <ProfilePage />
  }

  return <UnauthorizedAccess />
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/dashboard">
          <AllowDashboardAccess />
        </Route>
        <Route exact path="/profile">
          <AllowProfileAccess />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
