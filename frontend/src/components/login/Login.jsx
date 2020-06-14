import React, { Component } from "react";
import "./loginStyles.css";
import { fakeAuth } from "./MyHome";
import swal from "sweetalert";
import person from "./person.png";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminEmail: "",
      adminPassword: "",
    };
  }

  componentDidMount(){
    console.log(localStorage.getItem('authToken'));
    if(localStorage.getItem('authToken')){
      window.location.href="/tours"
    }
  }

  onSubmitHandler = (e) => {
    //Validation
    if (this.state.adminEmail == null && this.state.adminPassword == null) {
      return alert("Cannot submit empty fields");
    }

    // console.log(this.state.adminEmail);
    // console.log(this.state.adminPassword);

    fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        adminEmail: this.state.adminEmail,
        adminPassword: this.state.adminPassword,
      }),
    })
      .then((callback) => callback.json())
      .then((callbackJson) => {
        if (callbackJson.authToken) {
          localStorage.setItem("username", callbackJson.username);
          localStorage.setItem("authToken", callbackJson.authToken);
          fakeAuth.isAuthenticated = true;
          this.setState(
            {
              ...this.state.loginFunction,
            },
            this.props.loginFunc
          );
          swal("Logged in successfully!", "No warnings!", "success");
        }else{
          swal("Error!", "Incorrect Credentials", "error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login-parent">
        <div className="login-name">
          <h1 className="title-login">
            {" "}
            <img src={person}></img>
            <br></br> LOGIN
          </h1>
        </div>
        <div className="login-form">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className={"text-white"}>
                <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Admin Name
              </label>
              <input
                name="adminEmail"
                onChange={this.onChangeHandler}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.adminEmail}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className={"text-white"}>
                <i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Admin
                Password
              </label>
              <input
                name="adminPassword"
                onChange={this.onChangeHandler}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.adminPassword}
                required
              />
            </div>

            <button
              type="button"
              className="submit-button"
              onClick={() => this.onSubmitHandler()}
            >
              <i className="fa fa-send"></i>&nbsp; Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
