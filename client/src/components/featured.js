import React from 'react'
import "../styles/featured.css"
import offers from "../data/featuredoffers.json"

let index = 0;

function Featured() {
  return (
    <div className='featured'>
        <img className='featuredImage' src='./images/facebook.png'></img>
        <div className='details'>
            <h1>{offers[index].name}</h1>
            <h3>role:</h3>{offers[index].role}
            <h3>skills required:</h3>{offers[index].skills}
            <h3>compensation</h3>{offers[index].compensation}
        </div>
        <button id="apply">apply</button>
    </div>
  )
}

export default Featured