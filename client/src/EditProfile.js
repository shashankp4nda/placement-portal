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
  const [GPA, setGPA] = useState("");
  const [future, setfuture] = useState("");

  const history = useHistory();

  const Update = ()=>{
    Axios.post("http://localhost:8080/update",{
      Email:email, Name: name, Gender: gender, Phone:phone, Skills:skills, gpa : GPA, Future: future
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
                <div className='field'><h2>GPA: </h2><input type="text" name="GPA"  onChange={(e)=>{
                  setGPA(e.target.value);
                }}/></div>
                <div className='field'>
                <select name="type" onChange={(e)=>{
                    setfuture(e.target.value);
                  }}>
                      <option value="higher studies">Higher Studies</option>
                      <option value="placement">Placement</option>
                      
                  </select>
                </div>

            <button onClick={Update} > Submit </button>
          </form>
        </div>
    </div>
  )
}

export default EditProfile