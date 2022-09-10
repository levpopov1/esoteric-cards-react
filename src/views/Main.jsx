import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/slices/userSlice';
import { fetchVendors } from '../redux/slices/vendorsSlice';
import { fetchDecks } from '../redux/slices/decksSlice';

// components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Main() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.id) {
      navigate('/auth/login');
    }
  }, [user]);

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
