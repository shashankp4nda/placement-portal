import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import './styles/viewStudents.css'
import offers from './data/offer.json'

function offerList() {
    let list = [];
    offers.forEach(offer => {
        list.push(
            <div className='studentBlock'>
                <h1>{offer.name}</h1>
                <div className='row'><h3>Role: </h3><p>{offer.role}</p></div>
                <div className='row'><h3>Skills: </h3><p>{offer.skills}</p></div>
                <div className='row'><h3>Compensation: </h3><p>{offer.compensation}</p></div>
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
            <h1>List of Active Offers: </h1>
            <div className='records'>{offerList()}</div>
        </div>
    </div>
  )
}

export default ViewStudents