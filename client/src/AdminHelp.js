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
                <div className="helpItems">
                    <details>
                        <summary>View students</summary>
                        <p>Renders a list of all students registered with the placement portal, along with their profile fields.</p>
                    </details>
                    <br />
                    <br />
                    <br />
                    <details>
                        <summary>Active Offers</summary>
                        <p>provides a list of all the offers that are on active on the placmenet portal at the time of checking.</p>
                    </details>
                </div>
            </div>
        </div>
        
    )
}

export default AdminHelp;