import React, { Component } from 'react';
import './Dashboard.css';
import Tabs from '../../Components/Tabs/Tabs.jsx'
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
export default class Dashboard extends Component{

   constructor(props){
    super();
  }
    logoutnow() {
      localStorage.removeItem('userName');
      localStorage.removeItem('token');
      console.log('logged out')
      browserHistory.push('/');
  }
  render(){
    return(
     <div>
        <div id='flex_sign'>
          <header>MoveWatch</header>
          <p id="logout" style={{textDecoration: 'none', color: 'black'}} onClick={this.logoutnow}>Logout</p>
          <Tabs />
          <footer> Created by Imani Fecu </footer>
        </div>
      </div>
      )
  }
}
