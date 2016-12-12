import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Signup_Login from './Routes/Signup_Login/Signup_Login.jsx';
import Dashboard  from './Routes/Dashboard/Dashboard.jsx';
import Landing from './Routes/Landing/Landing.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
        <Route path='/' component={Landing}></Route>
        <Route path='/signup_login' component={Signup_Login}></Route>
        <Route path='/movewatch' component={Dashboard}></Route>
      </Router>, document.querySelector('#root-container'));


