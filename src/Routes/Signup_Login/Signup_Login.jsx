import React, { Component } from 'react';
import './Signup_Login.css';
import App from '../../Components/App/App.jsx'
export default class Signup_Login extends Component{
  render(){
    return(
      <div>
        <div id='flex_sign'>
          <header>MoveWatch</header>
          <App />
          <footer> Created by Imani Fecu </footer>
        </div>
      </div>
      )
  }
}
