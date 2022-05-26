import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import RecruiterHelp from './RecruiterHelp';
import RecViewStudents from './RecViewStudents';
import UploadJob from './UploadJob';

function RecruiterRoutes() {
  return (
    <div>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/recruiter">
                        <RecruiterHelp />
                    </Route>
                    <Route path="/uploadjob">
                        <UploadJob />
                    </Route>
                    <Route path="/viewappliedstudents">
                        <RecViewStudents />
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
  )
}

export default RecruiterRoutes