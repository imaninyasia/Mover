import React, { Component } from 'react';
import update from 'react-addons-update';
import ItemList from '../itemList/itemList.jsx'
import './Tabs.css';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {item_desc: '',
                  price: '',
                  room: '',
                  kitchen: false,
                  rooms: [],
                  items: []
                  };
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.roomHandle = this.roomHandle.bind(this);
    this.getitems = this.getitems.bind(this)
  }
  handleChangeDesc(event){
    this.setState({item_desc: event.target.value})
  }
   handleChangePrice(event){
    this.setState({price: event.target.value});
  }
  roomHandle(event){
    this.setState({room: this.room.value});
    console.log(this.state)
  }
  createTab() {
console.log(this.state)
    console.log(document.getElementsByClassName('tab'))
  }

  componentWillMount(){
    this.getitems();
  }

 putItemInState(value){
let something = value.map((item)=> item)
  this.setState({
    items: value
  })

 }
 getitems(){
  let user = localStorage.getItem('userName')
    fetch('/move/items/get/'+ user, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('token')
      },

      })
    .then((data) => data.json())
    .then((data)=> {
      let value = data
      // this.putItemInState(value);
      this.setState({ items: data });
    })


    }

postItem(){
  console.log(this.state);
    fetch('/move/item/save', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` +  localStorage.getItem('token')
      },
      body: JSON.stringify({
        description: this.state.item_desc,
        price: this.state.price,
        room: this.state.room,
        username: localStorage.getItem('userName')
      })
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
    });

 fetch('/move/save', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` +  localStorage.getItem('token')
      },
      body: JSON.stringify({
        room: this.state.room,
        username: localStorage.getItem('userName')
      })
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
    });


this.getitems();

  }

  deleteItem(e){
    console.log()
    let user = localStorage.getItem('userName')
      fetch('/move/item/delete/'+user, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ` +  localStorage.getItem('token')
      },
      body: JSON.stringify({
        description: this.state.item_desc,
        description: this.state.room,
        username: localStorage.getItem('userName')
      })
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
    });
  }


  render(){
    return(
      <article id="container_Tab">
      <h3>Welcome {localStorage.getItem('userName')}</h3>
      <div style={{backgroundColor: '#E2C6BB'}} className='tab'>
       <select onChange={this.roomHandle} ref={(input)=>{this.room = input}} name="room" >
          <option value="#">Select a room</option>
          <option value="1">Kitchen</option>
          <option value="2">Living Room</option>
          <option value="3">Bedroom</option>
          <option value="4">Bathroom</option>
          <option value="5">Dining Room</option>
          <option value="6">Office</option>
      </select>
      </div>
      <div className='add' onClick={this.createTab.bind(this)}>+</div>
      <div className='open'>

        <input name="description" type="text" value = {this.state.item_desc} onChange={this.handleChangeDesc} placeholder="item description"/>
        <input name="price" type="text" value={this.state.price} onChange={this.handleChangePrice} placeholder="price"/>
        <input onClick={this.postItem.bind(this)} type="submit" value="Submit"/>
<div id="data_container">
  <ItemList
    items={this.state.items}
  />
</div>
      </div>
      </article>
      )
  }
}
