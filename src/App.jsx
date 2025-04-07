
import React, { useEffect } from 'react';
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/dashboard/home/Home';
import Profile from './components/dashboard/profile/Profile';
import Notification from './components/dashboard/notification/Notification';
import Settings from './components/dashboard/settings/Settings';
import Preference from './components/dashboard/settings/preference/Preference';

import Account from './components/dashboard/settings/account/Account';
import NotificationSettings from './components/dashboard/settings/notificationsettings/NotificationSettings';
import Investments from './components/dashboard/investments/Investments';

const App = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  },[])

  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path="profiles" element={<Profile />} />
            <Route path="investments" element={<Investments />} />
            <Route path='notification' element={<Notification />} />

            <Route path='settings' element={<Settings />}>
              {/* <Route path='prefernce' element={<Preference/>}/> */}
              <Route index element={<Navigate to="preference" replace />} />
              <Route path="preference" element={<Preference />} />
              <Route path="notificationsettings" element={<NotificationSettings />} />
              <Route path='account' element={<Account />} />
            </Route>

          </Route>

          {/* Redirect unknown routes to login */}
          <Route path="*" element={token ? <Navigate to='/' /> : <Navigate to="/login" />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
