const roomRouter = require('express').Router()
const { saveRooms, getRooms, deleteRoom, getItems, delItem, saveItem, deleteCreatedRoom } = require('../models/moveWatch.js')


roomRouter.route('/retrieve')
  .get( getRooms, (req, res) => res.json(res.rooms || []));

roomRouter.route('/save')
  .post( saveRooms, (req, res) => res.json({message: 'updated rooms'}));

roomRouter.route('/delete')
  .delete( deleteRoom, (req, res)=> res.json({message: 'deleted room'}));

roomRouter.route('/items/get/:username')
  .get( getItems, (req, res)=> res.json(res.items || []));

roomRouter.route('/item/delete/:username')
  .delete( delItem, (req, res)=> res.json({message: 'deleted item'}))

roomRouter.route('/item/save')
  .post( saveItem, (req, res)=> res.json({message: 'saved item'}))
module.exports = roomRouter;


