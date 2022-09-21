import React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    const MON_URL = "http://192.168.1.177:4000";

    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("log1", this.state.username);
    console.log("log2", this.state.password);

    if (this.state.username && this.state.password) {
      axios
        .post(MON_URL+`/admin/authenticate`, user)
        .then((response) => {
          let userresponse = response;
          console.log(userresponse.data);

          if (userresponse) {
            sessionStorage.setItem("data", JSON.stringify(userresponse));
            this.setState({ redirectToReferrer: true });
          }
        }, this)
        .catch((error) => alert(error));
    }
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Navigate to={"/dashboard"} />;
    }
    if (sessionStorage.getItem("data")) {
      return <Navigate to={"/dashboard"} />;
    }

    return (
      <>
        <div className="fullsheet">
          <div className="auth-form">
            <div className="avatar"></div>
            <h4 className="modal-title">Connectez avec votre compte</h4>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.handleChange}
                  placeholder="username"
                  required
                />
                {/* <small className="text-danger">{this.state.username}</small> */}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="***********"
                  required
                />
                {/* <small className="text-danger">{this.state.password}</small> */}
              </div>
              <button
                className="btn btn-primary btn-block btn-lg form-control mb-3"
                type="submit"
              >
                Connecter
              </button>
            </form>
            <div className="text-center small text-dark">
              Vous n'avez pas un compte?
              <nav>
                <Link to={"/singup"}>S'inscrire </Link>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
