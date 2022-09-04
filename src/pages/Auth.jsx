import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import Logout from '../views/Logout';

function Auth() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<Navigate to={'login'} replace />} />
    </Routes>
  );
}

export default Auth;
