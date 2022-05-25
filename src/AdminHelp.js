import React from "react";
import AdminSidebar from './components/AdminSidebar'
import "./styles/help.css";

function AdminHelp()
{
    return(
        <div className="Help">
            <AdminSidebar />
            <div className="content-h">
                <h1>Admin Help</h1>      
                <details>
                    <summary>Student List</summary>
                    <p>Contains a Description of all the student records. </p>
                </details>
                <br />
                <br />
                <br />
                <details>
                    <summary>View Offers</summary>
                    <p>Displays all the offers available to students</p>
                </details>
                <br />
                <br />
                <br />
                <details>
                    <summary>Edit Profile</summary>
                    <p>Allows Students to edit their profiles.</p>
                </details>
        
                <br></br>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>For any issues contact Main management@:  xyz@ssn.edu.in</h3>
            </div>
          
        </div>
        
    )
}

export default AdminHelp;