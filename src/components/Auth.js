import React, { Component } from 'react';

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  usernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  passwordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input onChange={this.usernameChange}></input>
        <input onChange={this.passwordChange}></input>
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}

export default Auth;