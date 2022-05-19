import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Events from './Components/Events';
import AddEvent from './Components/Forms/AddEventContainer';
import Register from './Components/Forms/Register';
import LoginContainer from './Components/Forms/LoginContainer';


function App() {
  const [isLoggedIn, setIsloggedIn] = useState("false");
  return (
    <div className='app'>
    <Router>
      <div className='navbar__container'>
        <ul className='navbar__listwrapper'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/addevent">AddEvent</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {/* <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/addevent">
            <AddEvent />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LoginContainer />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
