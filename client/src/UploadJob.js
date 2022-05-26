import React from 'react'
import RecruiterSidebar from './components/RecruiterSidebar'
import "./styles/uploadJob.css"

function UploadJob() {
  return (
    <div>
        <RecruiterSidebar />
        <div className='content-uj'>
            <h1>Upload Job Details</h1>
            <form className='jobForm' action="">
            <div className='field'><h2>Company: </h2><input type="text" name="cname"/></div>
            <div className='field'><h2>role: </h2><input type="text" name="role"/></div>
            <div className='field'><h2>Skills required </h2><input type="text" name="skills"/></div>
            <div className='field'><h2>Compensation </h2><input type="text" name="compensation"/></div>
            <button id="submit" > Submit </button> 
            </form>
        </div>
    </div>
  )
}

export default UploadJob