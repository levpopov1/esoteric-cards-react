import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-sticky main-bg-color-vertical">
        <Link to="/" className="logo">
          <i className="bi bi-grid-fill"></i>
          <span className="label ms-2">Esoteric</span>
        </Link>
        <ul className="nav flex-column">
          <p className="sidebar-navblock-header">Categories</p>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/playing-cards">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Playing Cards</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/card-games">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Card Games</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/tarot-cards">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Tarot Cards</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className="nav flex-column">
          <p className="sidebar-navblock-header">Categories</p>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/featured">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Featured Products</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/latest-releases">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Latest Releases</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/release-schedule">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Release Schedule</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/news">
              <i className="bi bi-grid-fill"></i>
              <span className="label">News &amp; Events</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/random">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Random Deck</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/vendors">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Vendor List</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className="nav flex-column">
          <p className="sidebar-navblock-header">Section Header</p>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="/" target="_blank">
              <i className="bi bi-grid-fill"></i>
              <span className="label">External Link</span>
              <i className="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="/" target="_blank">
              <i className="bi bi-grid-fill"></i>
              <span className="label">External Link</span>
              <i className="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="/" target="_blank">
              <i className="bi bi-grid-fill"></i>
              <span className="label">External Link</span>
              <i className="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="/" target="_blank">
              <i className="bi bi-grid-fill"></i>
              <span className="label">External Link</span>
              <i className="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="/" target="_blank">
              <i className="bi bi-grid-fill"></i>
              <span className="label">External Link</span>
              <i className="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="/" target="_blank">
              <i className="bi bi-grid-fill"></i>
              <span className="label">External Link</span>
              <i className="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
