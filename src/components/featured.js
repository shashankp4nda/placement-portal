import React from 'react'
import "../styles/featured.css"

function Featured() {
  return (
    <div className='featured'>
        <img className='featuredImage' src='./images/facebook.png'></img>
        <div className='details'>
            <p><span>ROLE:</span> Software Dev</p>
            <p><span>SKILLS REQ:</span> react, node, express</p>
            <p><span>COMPENSATION:</span> 24LPA</p>
        </div>
    </div>
  )
}

export default Featured