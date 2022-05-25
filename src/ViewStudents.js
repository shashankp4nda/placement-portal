import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import './styles/viewStudents.css'
import students from './data/studentRecords.json'

function studentList() {
    let list = [];
    students.forEach(student => {
        list.push(
            <div className='studentBlock'>
                <h1>{student.name}</h1>
                <div className='row'><h3>email: </h3><p>{student.email}</p></div>
                <div className='row'><h3>Gender: </h3><p>{student.gender}</p></div>
                <div className='row'><h3>phone: </h3><p>{student.phone}</p></div>
                <div className='row'><h3>GPA: </h3><p>{student.GPA}</p></div>
                <div className='row'><h3>Higher Studies: </h3><p>{student.hs}</p></div>
            </div>
        )
    });
    return(list);
}

function ViewStudents() {
  return (
    <div>
        <AdminSidebar />
        <div className='content-vs'>
            <h1>List of Registered Students: </h1>
            <div className='records'>{studentList()}</div>
        </div>
    </div>
  )
}

export default ViewStudents