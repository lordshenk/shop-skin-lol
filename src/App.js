import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home-component/Home.js';
import Profile from './components/profile-component/Profile.js';
import DiscountContext from './contexts/DiscountContext';

function App() {
  return (
    <HashRouter>
      <div className="App" >
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
