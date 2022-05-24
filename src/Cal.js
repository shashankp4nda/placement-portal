import logo from './logo.svg';
import Sidebar from './components/sidebar'
import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/Cal.css';
import { useState } from 'react';
import appointments from './data/appointments.json';

function showAppointments(on) {
  let onDateApps = [];
  let flag = 0;
  appointments.forEach(appointment => {
    if(appointment.date === on) {
      onDateApps.push(<li><h3>{appointment.event}</h3> @ {appointment.time}</li>);
      flag += 1;
    }
  });
  if (flag == 0) {
    onDateApps.push(<p style={{"font-size": "0.7rem", "margin-right": "50%"}}>No Appoinments scheduled for this today</p>);
  }
  return  (
    <ul>
      {onDateApps}
    </ul>
  )
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
          {showAppointments(date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear())}
        </div>
      </div>
    </div>
  );
}

export default Cal;
