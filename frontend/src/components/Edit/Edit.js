import React, { Component } from "react";
import "./Edit.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import cancelled from "./cancelled.png";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tname: "",
      tdescription: "",
      price: "",
      tnumber: "",
    };
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmitHandler = () => {
    alert(JSON.stringify(this.state));
  };

  search = (e) => {
    let keyword = this.state.search;
    if (keyword === "") {
      return alert("This field is required");
    }
    fetch("http://localhost:5000/view/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        tnumber: keyword,
        tname: "",
        tdescription: "",
        price: "",
      }),
    })
      .then((callback) => callback.json())
      .then((callbackJson) => {
        this.setState(
          {
            tname: callbackJson[0].tname,
            tdescription: callbackJson[0].tdescription,
            price: callbackJson[0].price,
            tnumber: callbackJson[0].tnumber,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  delete = (e) => {
    let deleteDoc = this.state.tnumber;
    if (deleteDoc === "") {
      return alert("Specify an entry!");
    }
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Package has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });

    fetch("http://localhost:5000/view/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        tnumber: deleteDoc,
        tname: "",
        tdescription: "",
        price: "",
      }),
    })
      .then((callback) => callback.json())
      .then((callbackJson) => {})
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

  update = (e) => {
    let updateDoc = this.state.tnumber;
    if (updateDoc === "") {
      return alert("Please specify the package number");
    }
    fetch("http://localhost:5000/view/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        tnname: this.state.tname,
        tdescription: this.state.tdescription,
        price: this.state.price,
        tnumber: this.state.tnumber,
      }),
    })
      .then((callback) => callback.json())
      .then((callbackJson) => {
        swal("Package has been updated!", "No warnings!", "success");
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

  render() {
    return (
      <div className="container">
        <div className="containr text-center">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="y"><img src={cancelled}></img>&nbsp;Update/Delete Tour Packages</h1>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="container text-center mt-3">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label className="text-left">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;Tour
                Number
              </label>
              <input
                name="search"
                onChange={this.onChangeHandler}
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.search}
                required
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.search}
              >
                <i className="fa fa-search"></i> &nbsp; Search
              </button>
            </div>
          </form>

          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label className="text-left">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;Tour
                Number
              </label>
              <input
                name="tnumber"
                onChange={this.onChangeHandler}
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.tnumber}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i class="fa fa-suitcase" aria-hidden="true"></i>&nbsp;Tour Name
              </label>
              <input
                name="tname"
                onChange={this.onChangeHandler}
                type="text"
                className="form-control"
                value={this.state.tname}
                required
              />
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
                className="form-control"
                value={this.state.tdescription}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i class="fa fa-money" aria-hidden="true"></i>&nbsp;Tour Price
              </label>
              <input
                name="tprice"
                onChange={this.onChangeHandler}
                type="text"
                className="form-control"
                value={this.state.tprice}
                required
              />
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
              <button className="btn btn-warning" onClick={this.update}>
                <i className="fa fa-edit"></i>&nbsp; Update
              </button>
              <button className="btn btn-danger ml-2" onClick={this.delete}>
                <i className="fa fa-trash"></i>&nbsp; Delete
              </button>
              <Link to="/tours">
                <button className="btn btn-info ml-2">
                  <i className="fa fa-arrow-left"></i>&nbsp; Back to Add Tour
                  Packages
                </button>
              </Link>
            </div>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Edit;
