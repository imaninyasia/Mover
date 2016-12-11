import React, { Component } from 'react';
import './Landing.css'
import Tabs from '../../Components/Tabs/Tabs.jsx'
export default class Landing extends Component{
  render(){
    return(
      <div>
        Landing Page
        <div id='flex_sign'>
        Signup login
        <Tabs />
        <div className='open'>

        </div>
        </div>
      </div>
      )
  }
}
