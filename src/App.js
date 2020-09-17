import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './component/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Notfound from './component/Notfound/Notfound';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
  
  return (
   <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/friend/:id">
        <FriendDetail></FriendDetail>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="*">
      <Notfound></Notfound>
    </Route>
    </Switch>
   </Router>
  );
}

export default App;
