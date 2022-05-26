import React, { Component } from 'react'
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

var name="Shashank"

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className="greeting">
          <img className='profileImage' src='./images/no_user.png' />
          <h3>Welcome, <b>{name}</b></h3>
        </div>
        <nav className='links'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="./cal">Calender</Link>
            <Link to="./edit_profile">Edit Profile</Link>
            <Link to="./question">Question Bank</Link>
            <Link to="./help">Help</Link>
        </nav>
        <Link className="log" to="/">Logout</Link>
      </div>
    )
  }
}
