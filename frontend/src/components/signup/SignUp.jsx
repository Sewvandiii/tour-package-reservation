import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import "./signupStyles.css";
import { Link } from "react-router-dom";
import guest from "./guest.png";

class SignUp extends Component {
  render() {
    return (
      <div className="e">
        <br></br>

        <div className="signup-main mt-1 mb-3 p-">
          <br></br>
          <div className="signup-box-form">
            <SignUpForm />
          </div>
          <div className="signup-box-name">
            <h1 className="title-text">
              <img src={guest}></img>
              <br></br>SIGN UP
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
