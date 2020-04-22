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
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/dashboard"} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
