import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AdminHelp from './AdminHelp';

function AdminRoutes() {
  return (
    <div>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/admin">
                        <AdminHelp />
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
  )
}

export default AdminRoutes