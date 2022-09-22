import React from 'react'
import { useState } from 'react';
import './Color.css';

function Color() {
    const [color,setColor]=useState("red");
// function cg(e){
// setColor(e.target.value)
// }
  return (
    <div className='ma'>
        <div className='di' style={{backgroundColor:`${color}`}}>  </div>
<input type="text" onChange={(e)=>{ setColor(e.target.value)}} style={{borderColor:`${color}`}}></input>
      
    </div>
  )
}

export default Color;