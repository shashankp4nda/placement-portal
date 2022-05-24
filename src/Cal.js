import logo from './logo.svg';
import Sidebar from './components/sidebar'
import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/Cal.css';
import { useState } from 'react';
import appointments from './data/appointments.json';

function showAppointments(date) {
  let onDateApps = [];
  appointments.forEach(appointment => {
    if(appointment.date == date) {

    }
  });
}

function Cal() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <Sidebar />
      <div className='content-c'>
        <Calendar 
          onChange={setDate}
          value={date}
        />
        <div className='appointments'>
          <h1>Appointments</h1>
          <p>Please select a date to view appointments</p>
          <h4>Here are your appointments on { date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() }</h4>
        </div>
      </div>
    </div>
  );
}

export default Cal;
