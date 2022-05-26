import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import './styles/viewStudents.css'
// import students from './data/studentRecords.json'
import Axios from 'axios'

var list = []
function studentList(students) {
    {/*let list = [];*/}
    while(list.length!=0) {
        list.pop();
    }
    for(let i = 0; i < students.length; i++ ) {
        
        list.push(
            <div className='studentBlock'>
                <h1>{students[i].Name}</h1>
                <div className='row'><h3>email: </h3><p>{students[i].Email}</p></div>
                <div className='row'><h3>Gender: </h3><p>{students[i].Gender}</p></div>
                <div className='row'><h3>phone: </h3><p>{students[i].Phone}</p></div>
                <div className='row'><h3>GPA: </h3><p>{students[i].gpa}</p></div>
                <div className='row'><h3>Skills: </h3><p>{students[i].Skills}</p></div>
                <div className='row'><h3>Higher Studies: </h3><p>{students[i].Future}</p></div>
            </div>
        )
    };
    return({/*list*/});
}


function ViewStudents() {

  
    Axios.post('http://localhost:8080/viewStudents').then((response)=>{
        console.log(response.data);
       {/*result = response.data*/}
       studentList(response.data);
      })
      return (
        <div>
            <AdminSidebar />
            <div className='content-vs'>
                <h1>List of Registered Students: </h1>
                <div className='records'>{list}</div>
            </div>
        </div>
      )
}


export default ViewStudents