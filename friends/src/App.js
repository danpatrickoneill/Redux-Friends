import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>

            <NavLink exact to="/friends-list">
              Friends
            </NavLink>
            <NavLink exact to="/login">
              Login
            </NavLink>
          </nav>
          <Route exact path="/" component={null} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends-list" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
