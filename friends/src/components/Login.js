import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    console.log(this.state.credentials);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  submitLogin = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/friends-list");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitLogin} className="loginForm">
          <input
            onChange={this.handleChanges}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={this.handleChanges}
            type="text"
            name="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
