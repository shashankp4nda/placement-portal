import logo from './logo.svg';
import './styles/App.css';
import Sidebar from './components/sidebar'
import Featured from './components/featured'
import Card from './components/card'
import offers from './data/offer.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Dashboard />
  );
}

export default App;
