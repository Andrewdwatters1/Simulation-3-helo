import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../redux/reducer'

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

  register = () => {
    let userInfo = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post(`/api/auth/register`, {userInfo}).then(result => {
      // let location = "/dashboard"
      // window.location = location;
    })
  }

  login = () => {
    let userInfo = {
      username: this.state.username,
      password: this.state.password,
    }
    axios.post(`/api/auth/login`, {userInfo}).then(result => {
      if(result.data.length) {
        this.props.loginUser(result.data[0])
        window.location = "/#/dashboard"
      } else {
        alert('invalid credentials, please register for access')
      }
    }).catch(error =>{
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.usernameChange}></input>
        <input onChange={this.passwordChange}></input>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

export default connect(null, {loginUser})(Auth);