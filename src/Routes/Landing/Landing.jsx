import React, { Component } from 'react';
import './Landing.css'
import { Link } from 'react-router';


export default class Landing extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="background">
        <div id='flex_sign'>
          <header>MoveWatch</header>
          <p className="link_login"><Link style={{textDecoration: 'none', color: 'black'}} to="/signup_login">Login</Link></p>
         <article className='Land_art' id="one">
          <div className='text'>
          <h1 style={{color: '#FFD9CB' }}>Welcome to MoveWatch!</h1>
          <h3 style={{color: '#FFD9CB' }}>The application that allows you to <br/> succesfully organize your move</h3>
          </div>
          <div id="get_started"><Link style={{textDecoration: 'none', color: '#E2C6BB', 'fontSize': 35, 'marignTop': 25}} to="/signup_login">Get Started!</Link></div>
         </article>
         <article id="dark"className='Land_art'>
           <h2 style={{color: '#FFD9CB' }}id="two">
             Are you moving soon?<br/>
            have you been making a bunch of messy notes on your phone and scrap paper?<br/>
            Stop what you're doing, and come check us out. <br/>
            We'll make your planning neat and organized!
          </h2>
            <img src="http://3.bp.blogspot.com/-wsfiecoa9JU/VgOeA2icnUI/AAAAAAAAATg/HCGwH_P8I5Q/s1600/15-09-24%252C%2BMeaty%2Barticle%252C%2Bpicture.PNG" alt="moving"/>
         </article>
          <footer> Created by Imani Fecu </footer>
        </div>
      </div>
      )
  }
}
