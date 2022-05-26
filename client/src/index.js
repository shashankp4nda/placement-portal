import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Dashboard from './Dashboard';
import StudentRoutes from './StudentRoutes';
import AdminRoutes from './AdminRoutes';
import Register from './register';
import RecruiterRoutes from './RecruiterRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path = "/">
          <Login/>
        </Route>
        <Route exact path="/dashboard">
            <StudentRoutes />
          </Route>
          <Route exact path="/admin">
            <AdminRoutes />
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/recruiter">
            <RecruiterRoutes />
          </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
