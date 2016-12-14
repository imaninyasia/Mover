//user auth was made through dan's guidance #thanks danw
import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import TestLogin from '../TestLogin/TestLogin.jsx';
import { browserHistory } from 'react-router';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      signupForm: {
        username: '',
        password: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      currentToken: ''
    }
    this.postLogin = this.postLogin.bind(this);
  }

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      signupForm: {
        username: fieldsArr[1].value,
        password: fieldsArr[2].value
      }
    }, () => {
      console.log(this.state)
    })
  }

  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      loginForm: {
        username: fieldsArr[1].value,
        password: fieldsArr[2].value
      }
    }, () => {
      console.log(this.state)
    })
  }

  postSignup() {
    console.log('clicked')
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.signupForm.username,
        password: this.state.signupForm.password
      })
    })
    .then((data) => {
      this.setState({
        signupForm: {
          username: '',
          password: ''
        }
      })
    })
  }

  postLogin() {
     localStorage.setItem('userName', this.state.loginForm.username)
    console.log('clicked')
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.loginForm.username,
        password: this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('token', token)
      this.setState({
        currentToken: token,
        loginForm: {
          username: '',
          password: '',

        }
      }, () => {

      })
    })
    const checklogin = localStorage.getItem('userName')
    if (checklogin != localStorage.getItem('userName')){
      console.log('not logged in')
    }
    if (checklogin===localStorage.getItem('userName')){
      browserHistory.push('/movewatch')
    }

console.log("username is ", localStorage.getItem('userName'))
  }

  testLogin() {

 console.log("Test login ", localStorage.getItem('userName'))
    // fetch('/api', {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //     'Authorization': `Bearer ` + this.state.currentToken
    //   }
    // })
    // .then((data) => {
    //   console.log(data)
    // })
  }

  logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    });
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    browserHistory.push('/')
    console.log('logged out')
  }
  test(){
    console.log(test)
     console.log("Test login ", localStorage.getItem('userName'))
    return localStorage.getItem('token')
  }

  render() {
    return(
      <div>
      <button onClick={this.test.bind(this)}>test</button>
        <Signup
          trackSignupForm={this.trackSignupForm.bind(this)}
          postSignup={this.postSignup.bind(this)}
        />
        <Login
          trackLoginForm={this.trackLoginForm.bind(this)}
          logout={this.logout.bind(this)}
        />
        <button  onClick={this.postLogin} >Login</button>

        <TestLogin
          testLogin={this.testLogin.bind(this)}
        />
      </div>
    )
  }
}
