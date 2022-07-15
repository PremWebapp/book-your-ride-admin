import React from 'react';

import './App.css';
import './vendor/fontawesome-free/css/all.css';
import './css/sb-admin-2.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/admin/authentication/login';
import MainRouteContent from './helper/mainRouteContent';
import PrivateRoute from './helper/privateRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
          <Route exact path="/Admin/*" element={<MainRouteContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
