import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AdminHelp from './AdminHelp';
import ViewStudents from './ViewStudents';
import ViewOffers from './ViewOffers';

function AdminRoutes() {
  return (
    <div>
        <div>
            <Router>
                <Switch>
                    <Route path="/admin">
                        <AdminHelp />
                    </Route>
                    <Route path="/viewstudents">
                        <ViewStudents />
                    </Route>
                    <Route path='/viewOffers'>
                        <ViewOffers />
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
  )
}

export default AdminRoutes