import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cal from './Cal';
import Question from './Question';
import { Switch } from 'react-router-dom';
import EditProfile from './EditProfile';
import Help from './Help'

function StudentRoutes() {
  return (
    <div>
        <Router>
            <Switch>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/cal">
                <Cal />
            </Route>
            <Route exact path="/edit_profile">
                <EditProfile />
            </Route>
            <Route exact path="/question">
                <Question />
            </Route>
            <Route exact path="/help">
                <Help />
            </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default StudentRoutes