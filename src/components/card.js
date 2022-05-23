import React from 'react'
import "../styles/card.css"


function Card() {
  return (
    <div className='card'>
      <h2>Infosys</h2>
      <div className='details'>
            <h3>role:</h3>Analyst
            <h3>skills required:</h3>Microsoft Excel
            <h3>compensation</h3>7LPA
        </div>
        <button id="apply2">apply</button>
    </div>
    
  )
}

export default Card