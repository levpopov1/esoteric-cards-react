import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Main() {
  return (
    <div className="grid-container">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
