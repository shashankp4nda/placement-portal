import logo from './logo.svg';
import './styles/dashboard.css';
import Sidebar from './components/sidebar'
import Featured from './components/featured'
import Card from './components/card'
import offers from './data/offer.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function GeneralOffers() {
  let row = [];
  offers.forEach(offer => {
    row.push(<Card name={offer.name} role={offer.role} skills={offer.skills} compensation={offer.compensation}/>)
  });
  return row;
}

function Dashboard() {
  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <h5 className='featSign'>F E A T U R E D</h5>
        <div className='feat'>
          <Featured /> 
        </div>
        <h5 className='generalSign'>G E N E R A L  .  O F F E R S</h5>
        <div className='offersRow'>
        {GeneralOffers()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
