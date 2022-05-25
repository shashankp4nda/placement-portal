import React from "react";
import Sidebar from './components/sidebar'
import "./styles/question.css";

function Help()
{
    return(
        <div className="Help">
            <Sidebar />
            <div className="content">
                <h1>Help</h1>
            </div>
        </div>
        
    )
}

export default Help;