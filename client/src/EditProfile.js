import React,{useState} from 'react'
import Sidebar from './components/sidebar'
import Axios from "axios";
import "./styles/profile.css";
import {useHistory} from "react-router-dom";

function EditProfile() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");

  const history = useHistory();

  const Update = ()=>{
    Axios.post("http://localhost:5000/update",{
      Email:email, Name: name, Gender: gender, Phone:phone, Skills:skills
    }).then((response)=>{
      console.log(response);
      history.push('/dashboard');
    })
  }

  return (
    <div className='profile'>
        <Sidebar />
        <div className='content-d'>
          <h1>Edit Profile</h1>
          <form className='profileForm' action="">
            <div className='field'><h2>Email: </h2><input type="text" name="email"  onChange={(e)=>{
                  setEmail(e.target.value);
                }} /></div>
            <div className='field'><h2>Name: </h2><input type="text" name="name" onChange={(e)=>{
                  setName(e.target.value);
                }} /></div>
            <div className='field'><h2>Gender: </h2><input type="text" name="gender"  onChange={(e)=>{
                  setGender(e.target.value);
                }}/></div>
            <div className='field'><h2>Phone Number: </h2><input type="text" name="phone" onChange={(e)=>{
                  setPhone(e.target.value);
                }} /></div>
            <div className='field'><h2>Skills: </h2><input type="text" name="skills"  onChange={(e)=>{
                  setSkills(e.target.value);
                }}/></div>
            <button onClick={Update} > Submit </button>
          </form>
        </div>
    </div>
  )
}

export default EditProfile