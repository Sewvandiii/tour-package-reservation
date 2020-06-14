import React, { Component } from "react";
import Login from "./Login";
import SignUp from "../signup/SignUp";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";
import Add from "../Add/Add";
import Tours from "../Tours/Tours";
import Edit from "../Edit/Edit";
import ViewTours from "../ViewTours//ViewTours";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default class MyHome extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            <Route path="/home" exact component={HomePage}></Route>

            <Route path="/dashboard" exact component={Dashboard}></Route>

            <Route path="/contact" exact component={Contact}></Route>

            <Route path="/add" exact component={Add}></Route>

            {/* <PrivateRoute path="/dashboard">
              <AuthButton />
              <Dashboard />
            </PrivateRoute> */}

            {/* <PrivateRoute path="/add">
              <AuthButton />
              <Add />
            </PrivateRoute> */}

            <Route path="/login" exact component={LoginPage}></Route>

            <Route path="/signup" exact component={SignUp}></Route>

            <Route path="/edit" exact component={Edit}></Route>

            <Route path="/view" exact component={ViewTours}></Route>

            <PrivateRoute path="/tours" exact component={Tours} loggedIn={function(){console.log(localStorage.getItem('authToken')); if(localStorage.getItem('authToken')){return true}else{return false}}}></PrivateRoute>

            

            {/* <Route path="/signup" component={SignUp}></Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

//Authentication of Login
export const fakeAuth = {
  isAuthenticated: false,
  
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div className={"row justify-content-center  p-2"}>
      {/* <label className={"text-black mr-5"}>You are now logged in...</label> */}

      {/* <button
        className={"btn btn-danger"}
        onClick={() => {
          fakeAuth.signOut(() => history.push("/home"));
        }}
      >
        <i className="fa fa-send"></i>&nbsp; Sign out
      </button> */}
    </div>
  ) : (
    <div>
      <p>You are not logged in.</p>
      <button type={"button"} onClick={LoginPage()}>
        Log in
      </button>
    </div>
  );
}

function PrivateRoute({ component: Comp, loggedIn, path, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? <Comp {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/tours" } };

  //here login is a callback function
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Login loginFunc={login} />
    </div>
  );
}
