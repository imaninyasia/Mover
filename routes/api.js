
const apiRouter = require('express').Router();

apiRouter.route('/')
  .get((req, res) => res.json({message: 'secrets go here'}));

module.exports = apiRouter;
