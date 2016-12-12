import React, { Component } from 'react';
import './Tabs.css'

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {item_desc: '',
                  price: ''};
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeDesc(event){
    this.setState({item_desc: event.target.value})
  }
   handleChangePrice(event){
    this.setState({price: event.target.value});
  }

  handleSubmit(event){
    console.log(this.state);

  }
  create() {

    console.log(document.getElementsByClassName('tab'))
  }

  render(){
    return(
      <article id="container_Tab">
      <div className='tab'><p>Room</p></div>
      <div className='add' onClick={this.create.bind(this)}>+</div>
      <div className='open'>

        <input type="text" value = {this.state.item_desc} onChange={this.handleChangeDesc} placeholder="item description"/>
        <input type="text" value={this.state.price} onChange={this.handleChangePrice} placeholder="price"/>
        <input onClick={this.handleSubmit} type="submit" value="Submit"/>

      </div>
      </article>
      )
  }
}
