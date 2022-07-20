import React from 'react';

import './App.css';
import './css/sb-admin-2.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/admin/authentication/login';
import MainRouteContent from './helper/mainRouteContent';
import PrivateRoute from './helper/privateRoute';
import ForgatePasswod from './features/admin/authentication/forgatePasswod';
import ResetPasswod from './features/admin/authentication/resetPassword';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgatePasswod />} />
          <Route exact path="/reset-password" element={<ResetPasswod />} />
          <Route element={<PrivateRoute />}>
          <Route exact path="/Admin/*" element={<MainRouteContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
