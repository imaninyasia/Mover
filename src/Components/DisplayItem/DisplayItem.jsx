import React, { Component } from 'react';
import './DisplayItem.css'

const DisplayItem = props =>(



    <article id="itemList">


      <article>
      <h6>{props.description}  </h6>
        <h6>{props.price}</h6> <button onClick={
          (e)=>{
          let user = localStorage.getItem('userName')
          let desc = e.target.parentElement.childNodes[0].innerText;
          fetch('/move/item/delete/'+user, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ` +  localStorage.getItem('token')
          },
          body: JSON.stringify({
            description: desc,
            username: localStorage.getItem('userName')
          })
    });

          }
        } > delete</button>
</article>
    </article>


  )

export default DisplayItem;

