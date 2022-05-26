import React, { Component } from 'react'
import '../styles/Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var name="Recruiter"

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div class="greeting">
          <img class='profileImage' src='./images/no_user.png' />
          <h3>Welcome, <b>{name}</b></h3>
        </div>
        <nav className='links'>
            <Link to="./recruiter">Help</Link>
            <Link to="./uploadjob">Upload job</Link>
            <Link to="./viewappliedstudents">View applied students</Link>
        </nav>
        <Link className='log' to="/" >logout</Link>
      </div>
    )
  }
}
