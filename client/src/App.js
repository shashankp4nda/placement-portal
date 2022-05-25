import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cal from './Cal';
import Question from './Question';
import { Switch } from 'react-router-dom';
import EditProfile from './EditProfile';
import Help from './Help'
import StudentRoutes from './StudentRoutes';
import AdminRoutes from './AdminRoutes';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/student">
            <StudentRoutes />
          </Route>
          <Route path="/admin">
            <AdminRoutes />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
