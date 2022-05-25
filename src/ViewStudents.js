import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import './styles/viewStudents.css'
import students from './data/studentRecords.json'

function studentList() {
    let list = [];
    students.forEach(student => {
        list.push(
            <div className='studentBlock'>
                <h3>{student.name}</h3>
                <div className='row'><h4>email: </h4><p>{student.email}</p></div>
                <div className='row'><h4>Gender: </h4><p>{student.gender}</p></div>
                <div className='row'><h4>phone: </h4><p>{student.phone}</p></div>
                <div className='row'><h4>GPA: </h4><p>{student.GPA}</p></div>
                <div className='row'><h4>Higher Studies: </h4><p>{student.hs}</p></div>
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
            {studentList()}
        </div>
    </div>
  )
}

export default ViewStudents