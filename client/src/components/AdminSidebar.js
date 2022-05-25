import React, { Component } from 'react'
import '../styles/Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var name="ADMIN"

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div class="greeting">
          <img class='profileImage' src='./images/no_user.png' />
          <h3>Welcome, <b>{name}</b></h3>
        </div>
        <nav className='links'>
            <Link to="./admin">Help</Link>
            <Link to="./viewstudents">Student Lists</Link>
            <Link to="./ViewOffers">Active Offers</Link>
            
        </nav>
        <Link className='log' to="/" >logout</Link>
      </div>
    )
  }
}
