const roomRouter = require('express').Router()
const { saveRooms, getRooms, deleteRoom, getItems, delItem, saveItem } = require('../models/moveWatch.js')
const { authenticate } = require('../models/user.js')

roomRouter.route('/retrieve')
  .get(authenticate, getRooms, (req, res, next) => res.json({message: 'retrieved rooms'}));

roomRouter.route('/save')
  .post(authenticate, saveRooms, (req, res, next) => res.json({message: 'updated rooms'}));

roomRouter.route('/delete')
  .delete(authenticate, deleteRoom, (req, res, next)=> res.json({message: 'deleted room'}));

roomRouter.route('/items/get')
  .get(authenticate, getItems, (req, res, next)=> res.json({message: 'retrieved items'}));

roomRouter.route('/item/delete')
  .delete(authenticate, delItem, (req, res, next)=> res.json({message: 'deleted item'}))

roomRouter.route('/item/save')
  .post(authenticate, saveItem, (req, res, next)=> res.json({message: 'saved item'}))
module.exports = roomRouter;


