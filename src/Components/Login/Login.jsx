import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Login extends Component {
  render() {
    return(
      <div>
      <h1>Login</h1>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <button onClick={this.props.postLogin}><Link style={{textDecoration: 'none', color: 'black'}} to="/moveWatch">Login</Link></button>
        <button onClick={this.props.logout}><Link style={{textDecoration: 'none', color: 'black'}} to="/">Logout</Link></button>

      </div>
    )
  }
}
