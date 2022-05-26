import React from "react";
import RecruiterSidebar from './components/RecruiterSidebar'
import "./styles/help.css";

function RecruiterHelp()
{
    return(
        <div className="Help">
            <RecruiterSidebar />
            <div className="content-h">
                <h1>Help</h1>      
                <div className="helpItems">
                    <details>
                        <summary>Post opening</summary>
                        <p>Form to enter details of a new job opening for the students to apply.</p>
                    </details>
                    <br />
                    <br />
                    <br />
                    <details>
                        <summary>View students Applied</summary>
                        <p>Renders a list of all students that have Applied for the job posted, along with their profile fields.</p>
                    </details>
                </div>
            </div>
        </div>
        
    )
}

export default RecruiterHelp;