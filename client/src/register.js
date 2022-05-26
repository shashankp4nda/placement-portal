import React, { useState } from "react";
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import "./styles/register.css"

function Register(){
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [typeReg, setTypeReg] = useState("");
    
    const history = useHistory();
    const Reg = () =>{
      Axios.post('http://localhost:8080/reg',{
        uname:usernameReg, pass: passwordReg , type: typeReg
      }).then((response)=>{
        console.log(response);
        history.push("/");
      })

    }

    return(
            <div className="regBlock">
                <h1>Register</h1><br/>
                <div className="regField">
                  <label>Username</label><br/>
                  <input type="text" name="uname" onChange={(e)=>{
                    setUsernameReg(e.target.value);
                  }}/><br/>
                </div>
                <div className="regField">
                  <label>Password</label><br/>
                  <input type="password" name="pass" onChange={(e)=>{
                    setPasswordReg(e.target.value);
                  }}/><br/>
                </div>
                <div className="selUserType">
                  <label>Authorization</label><br/>
                  <select name="type" onChange={(e)=>{
                    setTypeReg(e.target.value);
                  }}>
                      <option value="admin">Admin</option> 
                      <option value="recruiter">Recruiter</option>
                      <option value="student">Student</option> 
                  </select><br/>
                </div>
                <div className="regBtnRow">
                  <button className="regBtn" onClick= {Reg}>Register</button>
                </div>
            </div>

    );
}

export default Register;
