import React from 'react'
import Sidebar from './components/sidebar'
import "./styles/profile.css";

function EditProfile() {
  return (
    <div className='profile'>
        <Sidebar />
        <div className='content-d'>
          <h1>Edit Profile</h1>
          <form className='profileForm' action="">
            <div className='field'><h2>Email: </h2><input type="text" name="email" /></div>
            <div className='field'><h2>Name: </h2><input type="text" name="name" /></div>
            <div className='field'><h2>Gender: </h2><input type="text" name="email" /></div>
            <div className='field'><h2>Phone Number: </h2><input type="text" name="email" /></div>
            <div className='field'><h2>Skills: </h2><input type="text" name="email" /></div>
            <input id="submit" type="submit" value="submit" />
          </form>
        </div>
    </div>
  )
}

export default EditProfile