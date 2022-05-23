import React from 'react'
import "../styles/card.css"


function Card(props) {
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <div className='details'>
            <h3>role:</h3>{props.role}
            <h3>skills required:</h3>{props.skills}
            <h3>compensation</h3>{props.compensation}
        </div>
        <button id="apply2">apply</button>
    </div>
    
  )
}

export default Card