import React from 'react';
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
