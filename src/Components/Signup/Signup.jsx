import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return(
      <div>
      <h1>Signup</h1>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="password"/>
        <button onClick={this.props.postSignup}>Signup</button>
      </div>
    )
  }
}
