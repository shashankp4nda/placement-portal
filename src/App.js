import logo from './logo.svg';
import './styles/App.css';
import Sidebar from './components/sidebar'
import Featured from './components/featured'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <h5 className='featSign'>F E A T U R E D</h5>
        <div className='feat'>
          <Featured /> 
          <img className='next' src='../images/next.png' />
        </div>
      </div>
    </div>
  );
}

export default App;
