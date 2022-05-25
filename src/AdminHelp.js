import React from "react";
import AdminSidebar from './components/AdminSidebar'
import "./styles/help.css";

function AdminHelp()
{
    return(
        <div className="Help">
            <AdminSidebar />
            <div className="content-h">
                <h1>Help</h1>      
                <details>
                    <summary>Dashboard</summary>
                    <p>Contains a concise Description of all the opportunities available. </p>
                </details>
                <br />
                <br />
                <br />
                <details>
                    <summary>Calendar</summary>
                    <p>Displays a calendar containing all applied interviews and tests.</p>
                </details>
                <br />
                <br />
                <br />
                <details>
                    <summary>Edit Profile</summary>
                    <p>Allows Students to edit their profiles.</p>
                </details>
                <br />
                <br />
                <br />
                <details>
                    <summary>Question Bank</summary>
                    <p>This page contains every aspect of interviews and tests that students could be prepared for </p>
                </details>
                <br></br>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>For any issues contact admin@:  xyz@ssn.edu.in</h3>
            </div>
          
        </div>
        
    )
}

export default AdminHelp;