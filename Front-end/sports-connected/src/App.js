import React from 'react';
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
