import {useState} from 'react';
import {useSelector} from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';
import UserMenuDropdown from './UserMenuDropdown';

function Navbar() {

  const user = useSelector(selectUser);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-outline-light-gray  me-3" type="button" id="sidebar-toggler">
              <i className="bi bi-list"></i>
            </button>
            <div className="input-group" id="global-app-search">
              <input className="form-control" type="text" id="search" placeholder="Search..."/>
              <button className="btn btn-outline" type="button" id="button-addon2">
                  <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn nav-link" title="Favourite">
                <i className="bi bi-star-fill"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" title="Refresh">
                <i className="bi bi-arrow-repeat"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" title="Notifications">
                <i className="bi bi-bell-fill"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" title="Settings">
                <i className="bi bi-gear-fill"></i>
              </button>
            </li>
            <UserMenuDropdown user={user}/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
