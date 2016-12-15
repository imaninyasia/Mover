import React, { Component } from 'react';
import DisplayItem from '../DisplayItem/DisplayItem.jsx';
import './itemList.css'
export default class ItemList extends Component{

  showItems(){
    return this.props.items.map((item, index)=>
      <DisplayItem
      description={item.description}
      price={item.price}
      key={index}
       />
      );
  }

  render(){
    return(
      <div>
      <h3>Item</h3>  <h3>Price</h3>

        <article id="showItems">{this.showItems()}</article>


      </div>
      )
  }
}
