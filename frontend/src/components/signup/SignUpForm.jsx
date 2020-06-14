import React, { Component } from "react";
import "./signupStyles.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const initialState = {
  userName: "",
  userEmail: "",
  password: "",
  conPassword: "",
  unameerror: "",
  uemailerror: "",
  passworderror: "",
  conpassworderror: "",
};

class SignUpForm extends Component {
  state = initialState;

  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let unameerror = "";
    let uemailerror = "";
    let passworderror = "";
    let conpassworderror = "";

    if (!this.state.userName) {
      unameerror = "Enter User Name";
    }

    if (!this.state.userEmail.includes("@")) {
      uemailerror = "Invalid Email";
    }

    if (!this.state.password) {
      passworderror = "Enter Password";
    }

    if (!this.state.conPassword) {
      conpassworderror = "Confirm Password";
    }

    if (unameerror || uemailerror || passworderror || conpassworderror) {
      this.setState({
        unameerror,
        uemailerror,
        passworderror,
        conpassworderror,
      });
      return false;
    }

    return true;
  };

  formSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.userName);
      console.log(this.state.userEmail);
      console.log(this.state.password);
      console.log(this.state.conPassword);
      //clear form
      this.setState(initialState);
    }

    if (
      this.state.userName == null &&
      this.state.userEmail == null &&
      this.state.password == null &&
      this.state.conPassword == null
    ) {
      return alert("Cannot submit empty fields");
    }
    if (this.state.password !== this.state.conPassword) {
      alert("Password Mismatch!");
      return;
    }

    swal("User Details Added Successfully!", "No warnings! ", "success");
    let thisState = this;
    let stateaccess = this.state;
    alert(JSON.stringify(this.state));
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        password: this.state.password,
        conPassword: this.state.conPassword,
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
        // alert("Submitted Successfully!");
       
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      userName: "",
      userEmail: "",
      password: "",
      conPassword: "",
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.formSubmitHandler}>
            <div className="form-group">
              <label>
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp;User Name
              </label>
              <input
                type="text"
                onChange={this.inputChangeHandler}
                name="userName"
                className="form-control"
                value={this.state.userName}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.unameerror}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;User
                Email
              </label>
              <input
                name="userEmail"
                type="email"
                onChange={this.inputChangeHandler}
                className="form-control"
                value={this.state.userEmail}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                &nbsp;Password
              </label>
              <input
                type="password"
                name="password"
                onChange={this.inputChangeHandler}
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.password}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.passworderror}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Confirm
                Password
              </label>
              <input
                name="conPassword"
                type="password"
                onChange={this.inputChangeHandler}
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.conPassword}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.conpassworderror}
              </div>
            </div>
            <br></br>

            <button type="submit" className="btn-submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
