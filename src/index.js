import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Signup_Login from './Routes/Signup_Login/Signup_Login.jsx';
import Dashboard  from './Routes/Dashboard/Dashboard.jsx';
import Landing from './Routes/Landing/Landing.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Container from './Routes/Container/Container.jsx'



ReactDOM.render(<Router history={browserHistory}>
        <Route path='/' component={ Container }>
          <IndexRoute component={Landing} />
          <Route path='movewatch' token={'userID'} component={Dashboard} />
          <Route path='signup_login' component={Signup_Login} />
        </Route>
      </Router>, document.querySelector('#root-container'));


