const roomRouter = require('express').Router()
const { saveRooms, getRooms } = require('../models/moveWatch.js')

roomRouter.route('/retrieve')
  .get(getRooms, (req, res, next) => res.json({message: 'retrieved rooms'}));

roomRouter.route('/save')
  .post(saveRooms, (req, res, next) => res.json({message: 'updated rooms'}));

roomRouter.route('/delete')
  .delete(deleteRoom, (req, res, next)=> res.json({message: 'deleted room'}));

roomRouter.route('/items/get')
  .get(getItems, (req, res, next)=> res.json({message: 'retrieved items'}));

roomRouter.route('/item/delete')
  .delete(delItem, (req, res, next)=> res.json({message: 'deleted item'}))

roomRouter.route('/item/save')
  .post(saveItem, (req, res, next)=> res.json({message: 'saved item'}))
module.exports = roomRouter;
