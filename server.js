'use strict'
require('dotenv').config({ silent: true });
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt');
const bcrypt      = require('bcryptjs');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
//zellwk.com/blog//crud-express-mongodb
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/favicon.ico', '/user/login', '/user/signup', '/', '/signup_login']}));
// app.get('/', (req, res)=>{

// })
const history = require('connect-history-api-fallback');
app.use(history());

const userRouter = require('./routes/user.js');
const apiRouter = require('./routes/api.js');
app.use('/user', userRouter);
app.use('/api', apiRouter);


app.listen(PORT, () => {console.log('server running on port ', PORT)});
