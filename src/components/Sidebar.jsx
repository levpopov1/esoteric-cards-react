import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar main-bg-color-vertical">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <p className="sidebar-navblock-header">
            Section Header
          </p>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center" to="/location">
              <i className="bi bi-grid-fill"></i>
              <span className="label">Internal Link</span>
              <i className="bi bi-chevron-right ms-auto"></i>
            </Link>
          </li>
        </ul>
        <hr/>
        <ul className="nav flex-column">
          <p className="sidebar-navblock-header">
            Section Header
          </p>
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
  )
}

export default Sidebar;