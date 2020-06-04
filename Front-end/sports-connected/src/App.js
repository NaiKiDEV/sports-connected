import React from 'react';
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard';
import UnauthorizedAccess from './components/unauthorizedaccess';
import Footer from './components/footer';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/navbar';
import ProfilePage from './components/profilepage';
import GymPage from './components/gympage';
import Gyms from './components/gyms';
import Trainers from './components/trainers';
import Courts from './components/courts';
import { useSelector } from 'react-redux';


function AllowDashboardAccess() {
  const { isLoggedIn } = useSelector(state => state.user);
  const { isSportGymAdmin } = useSelector(state => state.user.userData);


  if (isLoggedIn) {
    if (isSportGymAdmin) {
      return <GymPage />
    } else {
      return <Dashboard />
    }
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

function AllowGymAccess() {
  const { isLoggedIn } = useSelector(state => state.user);

  if (isLoggedIn) {
    return <GymPage />
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
        <Route exact path="/admindashboard">
          <AllowGymAccess />
        </Route>
        <Route exact path="/gyms">
          <Gyms />
        </Route>
        <Route exact path="/trainers">
          <Trainers />
        </Route>
        <Route exact path="/courts">
          <Courts />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
