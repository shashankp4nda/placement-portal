import logo from './logo.svg';
import './styles/App.css';
import Sidebar from './components/sidebar'
import Calendar from 'react-calendar/dist/umd/Calendar';

function Calendar() {
  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Calendar />
      </div>
    </div>
  );
}

export default Calendar;
