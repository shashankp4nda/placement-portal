import React, { useState } from "react";
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import "./styles/login.css";

function Login(){
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [loginstatus, setLoginStatus] = useState("");
    const history = useHistory();
    const Validate = () =>{
      Axios.post('http://localhost:8080/login',{
        uname:usernameReg, pass: passwordReg
      }).then((response)=>{
        if(response.data === "student"){
          console.log("route to dashboard");
          history.push("/dashboard");
        }
        else if(response.data === "admin"){
          console.log(" route to admin help");
          history.push("/admin");
        }
        else if(response.data === "recruiter"){
          console.log("route to recruiter");
          history.push("/recruiter");
        }
        else{
          setLoginStatus("password mismatch");
        }
        console.log(response);
      })
    }
    const Create = () =>{
      history.push("/register");
    }

    return(
            <div className="loginBlock">
                <h1>Login</h1><br/>
                <p>{loginstatus}</p>
                <div className="logField">
                  <label>Username</label><br/>
                  <input type="text" name="uname" onChange={(e)=>{
                    setUsernameReg(e.target.value);
                  }}/><br/><br />
                </div>
                <div className="logField">
                  <label>Password</label><br/>
                  <input type="password" name="pass" onChange={(e)=>{
                    setPasswordReg(e.target.value);
                  }}/><br/>
                </div>
                <div className="logBtnRow">
                  <button className="logBtn" onClick= {Validate}>Login</button>
                  <button className="logBtn" onClick = {Create}>Create Account</button>
                </div>
            </div>

    );
}

export default Login;
