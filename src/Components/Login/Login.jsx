import React, { Component } from 'react';
import { Link } from 'react-router';
import './Login.css'

export default class Login extends Component {
  track(){

    console.log(this.props.theToken)
  }
  render() {
    return(
      <div>
      <h1>Login</h1>
        <input  onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <button id="logout_click" onClick={this.props.logout}>Logout</button>

      </div>
    )
  }
}
