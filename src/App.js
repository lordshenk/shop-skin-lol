import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Hextech from './components/hextech-component/Hextech.js';
import Home from './components/home-component/Home.js';
import Profile from './components/profile-component/Profile.js';
import Champion from './components/champion-component/Champion.js';
import Auth from './components/auth-component/Auth.js';

function App() {
  return (
    <HashRouter>
      <div className="App" >
        <Switch>
          <Route path='/home/:page'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/hextech'>
            <Hextech />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/champion/:name'>
            <Champion />
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
