import React, { Component } from "react";
import "./Tours.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import add from "./add.png";
import { createHashHistory } from "history";

const initialState = {
  tname: "",
  tdescription: "",
  price: "",
  tnumber: "",

  tnameerror: "",
  tdescriptionerror: "",
  priceerror: "",
  tnumbererror: "",

  username: "",
};

class Tours extends React.Component {
  state = initialState;

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let tnameerror = "";
    let tdescriptionerror = "";
    let priceerror = "";
    let tnumbererror = "";

    if (!this.state.tname) {
      tnameerror = "This field is required";
    }

    if (!this.state.tdescription) {
      tdescriptionerror = "This field is required";
    }
    if (!this.state.price) {
      priceerror = "This field is required";
    }
    if (!this.state.tnumber) {
      tnumbererror = "This field is required";
    }

    if (tnameerror || tdescriptionerror || priceerror || tnumbererror) {
      this.setState({
        tnameerror,
        tdescriptionerror,
        priceerror,
        tnumbererror,
      });
      return false;
    }
    swal("Package Details Added Successfully!", "No warnings! ", "success");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.tname);
      console.log(this.state.tdescription);
      console.log(this.state.price);
      console.log(this.state.tnumber);

      //clear form
      this.setState(initialState);
    }

    if (
      this.state.tname == null &&
      this.state.tdescription == null &&
      this.state.price == null &&
      this.state.tnumber == null
    ) {
      return alert("Cannot submit empty fields");
    }
    fetch("http://localhost:5000/view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        tname: this.state.tname,
        tdescription: this.state.tdescription,
        price: this.state.price,
        tnumber: this.state.tnumber,
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      tname: "",
      tdescription: "",
      price: "",
      tnumber: "",
    });
  };

  componentDidMount() {
    console.log(localStorage.getItem("authToken"));
    if (!localStorage.getItem("authToken")) {
      window.location.href = "/login";
    }

    this.setState({
      username: localStorage.getItem("username"),
    });
  }

  render() {
    return (
      <div className="container">
        <Link to="/edit">
          <button className="btn btn-danger ml-2">
            <i className="fa fa-trash-o"></i>&nbsp; Upadate/Delete Tour Packages
          </button>
        </Link>
        <form onSubmit={this.formSubmitHandler}>
          <div className="container text-center">
            <br></br>
            <br></br>
            <br></br>

            <h1 className="o">
              {" "}
              <img src={add}></img>&nbsp;Add Tour Packages
            </h1>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="container text-center mt-3">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label className="text-left">
                  <i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;Tour
                  Name
                </label>
                <input
                  name="tname"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Tour Name"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.tname}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.tnameerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;Tour
                  Description
                </label>
                <input
                  name="tdescription"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Tour Description"
                  className="form-control"
                  value={this.state.tdescription}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.tdescriptionerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-money" aria-hidden="true"></i>&nbsp;Price of
                  the Tour
                </label>
                <input
                  name="price"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Price of the Tour"
                  className="form-control"
                  value={this.state.price}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.priceerror}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                  &nbsp;Tour Number
                </label>
                <input
                  name="tnumber"
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Tour Number"
                  className="form-control"
                  value={this.state.tnumber}
                  required
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.tnumbererror}
                </div>
              </div>

              <br></br>
              <br></br>
              <div className="form-group">
                <button
                  className="btn btn-danger"
                  onClick={this.onSubmitHandler}
                >
                  <i className="fa fa-send"></i>&nbsp; Submit
                </button>
                <Link to="/view">
                  <button className="btn btn-info ml-2">
                    <i className="fa fa-arrow-left"></i>&nbsp; Back to Tour
                    Packages
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

export default Tours;
