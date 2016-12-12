function saveRooms(req, res, next){
  const data = req.body.data;
  const userToken = req.cookie('myToken')
  //...*query so select everything where userToken=userTokenjoin other 2 tables on user_id *;
  //once i get the userToken, query tables so i get all table info where user_id equls current user
  "turn userToken into user_id"
//delete everything from items and rooms
  "delete * from items where user_id="
  "delete * from rooms where user_id="

  for rooms in data.rooms(){
    insert
  }
}
{
  rooms: {
    "bedroom": {
      items: {
        "green lamp": 3.95,
        "lamp": 4.95
      }
    },
    "living room": {
      items: {
        "sofa": 100,
        "lamp": 5.95
      }
    }
  }
}

function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO users (username, password) VALUES ($1, $2);',
    [req.body.desc, req.body.price)])
    .then( () => {
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
}

function getRooms(req, res, next){
  const userToken = req.cookie('myToken')
  var data ={
    rooms:{}
  }

  results = "select * from room join items on room_id="
  for row in results:
    data.rooms[row.room_name].items['item name'] = row.item.cost

  res.status(200).json(data);
}
