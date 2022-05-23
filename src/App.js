import logo from './logo.svg';
import './styles/App.css';
import Sidebar from './components/sidebar'
import Featured from './components/featured'
import Card from './components/card'
import offers from './data/offer.json'


function App() {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
