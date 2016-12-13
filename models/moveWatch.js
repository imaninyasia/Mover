const db = require('../lib/db');

function saveRooms(req, res, next){
  const userID = res.userData.userID;
 db.any(`INSERT INTO rooms (room_id, user_id) VALUES ($1, $2);`,
  [req.body.room, userID])
 .then(()=>{
  console.log('created new room tab')
 })
 .catch(error=> console.log(error))
}
//get room tabs
function getRooms(req, res, next){
db.any('SELECT * from rooms WHERE __')
.then(()=>{
  console.log('got room tabs')
})
.catch(error=> console.log(error))
}
//delete room tab
function deleteRoom(req, res, next){
db.none('DELETE FROM rooms WHERE room_id=($1) AND user_id=($2)')***req.body.
.then((data)=>{
  console.log('deleted ', data)
})
.catch(error=> console.log(error))
}
//get items
function getItems(req, res, next){
db.any(`SELECT * FROM items WHERE user_id =($1)`)
.then(()=>{
  console.log('got all items')
  next()
})
.catch(error=> console.log(error))
}
//delete item
function delItem(req, res, next){
db.none(`DELETE`)
.then((data)=>{
  console.log('deleted item', data)
})
.catch(error=> console.log(error))
}
//save item
function saveItem(req, res, next){
    const userID = res.userData.userID;
db.any('INSERT INTO items (room_id, description, price, user_id) VALUES ($1, $2, $3);',
  [req.body.room, req.body.description, req.body.price, userID])
  .then(()=>{
    console.log('item inserted into db')
    next()
  })
  .catch(error=> console.log(error))
}

module.exports = {
  saveRooms,
  getRooms,
  deleteRoom,
  getItems,
  delItem,
  saveItem
}
