import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cal from './Cal';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/cal">
            <Cal />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
