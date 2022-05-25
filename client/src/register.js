import React, { useState } from "react";
import Axios from 'axios';
import {useHistory} from "react-router-dom";

function Register(){
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [typeReg, setTypeReg] = useState("");
    
    const history = useHistory();
    const Reg = () =>{
      Axios.post('http://localhost:5000/reg',{
        uname:usernameReg, pass: passwordReg , type: typeReg
      }).then((response)=>{
        console.log(response);
        history.push("/");
      })

    }

    return(
            <div>
                <h1>Register</h1><br/>
                <label>Username</label><br/>
                <input type="text" name="uname" onChange={(e)=>{
                  setUsernameReg(e.target.value);
                }}/><br/>
                <label>Password</label><br/>
                <input type="password" name="pass" onChange={(e)=>{
                  setPasswordReg(e.target.value);
                }}/><br/>
                <label>Password</label><br/>
                <select name="type" onChange={(e)=>{
                  setTypeReg(e.target.value);
                }}>
                    <option value="admin">Admin</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="student">Student</option> 
                </select><br/>
                <button onClick= {Reg}>Register</button>
            </div>

    );
}

export default Register;
