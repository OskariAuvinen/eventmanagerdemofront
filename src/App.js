import './App.css';
import React, { useState, useEffect } from "react";
import { history } from "./Helpers/history";
import { clearMessage } from "./Actions/message";
import { logout } from "./Actions/auth";
// import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from './Components/Home';
import Events from './Components/Events';
// import AddEvent from './Components/Forms/AddEventContainer';
import Register from './Components/Forms/Register';
import LoginContainer from './Components/Forms/LoginContainer';
import AddEventContainer from './Components/Forms/AddEventContainer';



function App() {
  
  // const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className='app'>
      <Router history={history}>
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
              <AddEventContainer />
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
