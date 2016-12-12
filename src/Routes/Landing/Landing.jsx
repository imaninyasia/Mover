import React, { Component } from 'react';
import './Landing.css'
import { Link } from 'react-router';


export default class Landing extends Component{
  render(){
    return(
      <div>
        <div id='flex_sign'>
          <header>MoveWatch</header>
          <p className="link_login"><Link style={{textDecoration: 'none', color: 'black'}} to="/signup_login">Login</Link></p>
         <article className='Land_art'>
          <div className='text'>
          <h1>Welcome to MoveWatch!</h1>
          <h3>The application that allows you to <br/> succesfully organize your move</h3>
          </div>
          <div id="get_started"><Link style={{textDecoration: 'none', color: 'black'}} to="/signup_login">Get Started!</Link></div>
         </article>
         <article className='Land_art'>
           <h2 id="two">
             Are you moving soon?<br/>
            have you been making a bunch of messy notes on your phone and scrap paper?<br/>
            Stop what you're doing, and come check us out. <br/>
            We'll make your planning neat and organized!
          </h2>
            <img src="#" alt="moving"/>
         </article>
          <footer> Created by Imani Fecu </footer>
        </div>
      </div>
      )
  }
}
