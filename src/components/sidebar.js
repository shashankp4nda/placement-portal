import React, { Component } from 'react'
import '../styles/Sidebar.css';

var name="Shashank"

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div class="greeting">
          <img class='profileImage' src='./images/no_user.png' />
          <h3>Welcome, <b>{name}</b></h3>
        </div>
        <div className='links'>
            <a>Dashboard</a>
            <a>Edit profile</a>
            <a>Calender</a>
            <a>Question Bank</a>
            <a>Help</a>
        </div>
        <a className='lo'>logout</a>
      </div>
    )
  }
}
