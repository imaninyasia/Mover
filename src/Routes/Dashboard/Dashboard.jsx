import React, { Component } from 'react';
import './Dashboard.css';
import Tabs from '../../Components/Tabs/Tabs.jsx'
import { Link } from 'react-router';

export default class Dashboard extends Component{
  render(){
    return(
     <div>
        <div id='flex_sign'>
          <header>MoveWatch</header>
          <Link id="logout" style={{textDecoration: 'none', color: 'black'}} to="/">Logout</Link>
          <Tabs />
          <footer> Created by Imani Fecu </footer>
        </div>
      </div>
      )
  }
}
