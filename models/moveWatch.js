const db = require('../lib/db');

function saveRooms(req, res, next){
  db.any(`INSERT INTO rooms (room_id, username) VALUES ($1, $2);`,
  [req.body.room, req.body.username])
    .then(()=>{
  console.log('created new room tab')
  })
 .catch(error=> console.log(error))
}
function deleteCreatedRoom(){
  db.none('DELETE FROM rooms WHERE room_id=($1) AND username=($2);', [req.body.room, req.body.username])
    .then((data)=>{
  console.log('deleted ', data)
  })
  .catch(error=> console.log(error))
}
//get room tabs
function getRooms(req, res, next){
  db.any(`SELECT * from rooms WHERE username ='imanif';`)
 .then((rooms) => {
      res.rooms = rooms;
      console.log(rooms)
      next();
    })
    .catch(error => next(error));
}
//delete room tab
function deleteRoom(req, res, next){
  const userID = res.userData.userID;
  db.none('DELETE FROM rooms WHERE room_id=($1) AND user_id=($2);', [req.body.room, userID])
    .then((data)=>{
  console.log('deleted ', data)
  })
  .catch(error=> console.log(error))
}
//get items
function getItems(req, res, next){
  db.any(`SELECT * FROM items WHERE username =($1);`, [req.body.username])
    .then(()=>{
  console.log('got all items')
    next()
  })
.catch(error=> console.log(error))
}
//delete item
function delItem(req, res, next){
  db.none(`DELETE FROM items WHERE room_id=($1) AND username =($2) AND description=($3);`,
    [req.body.room, req.body.username, req.body.description])
    .then((data)=>{
  console.log('deleted item', data)
  })
  .catch(error=> console.log(error))
}
//save item
function saveItem(req, res, next){
db.any('INSERT INTO items (room_id, description, price, username) VALUES ($1, $2, $3, $4);',
  [req.body.room, req.body.description, req.body.price, req.body.username])
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
  saveItem,
  deleteCreatedRoom
}
