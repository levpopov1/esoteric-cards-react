import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVendors } from '../redux/slices/vendorsSlice';
import { fetchDecks } from '../redux/slices/decksSlice';

// components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
    dispatch(fetchDecks());
  }, [dispatch]);

  return (
    <div className="grid-container">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
