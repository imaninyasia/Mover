import React, { Component } from 'react';
import './Tabs.css'

export default class Tabs extends Component {

  create() {

    console.log(document.getElementsByClassName('tab'))
  }

  render(){
    return(
      <article>
      <div className='tab'><p>Room</p></div>
      <div className='add' onClick={this.create.bind(this)}>+</div>
      </article>
      )
  }
}
