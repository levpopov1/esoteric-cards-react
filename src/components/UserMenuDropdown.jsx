import { NavLink } from 'react-router-dom';

function UserMenuDropdown() {
  return (
    <li className="nav-item dropdown" id="user-icon">
      <button className="btn nav-link dropdown-toggle" id="userSettings" data-bs-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
        <i className="bi bi-person-circle" id="usericon"></i>
        <span className="label">user name</span>
      </button>
      <div id="userSettingsDropdown" className="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
        <a className="dropdown-item d-flex align-items-center" href="/users/id">
          <i className="bi bi-person-badge-fill"></i>
          <span className="label">View Profile</span>
        </a>
        <div className="dropdown-divider"></div>
        <h6 className="dropdown-header">Admin panel</h6>
        <NavLink to="/users" className="dropdown-item d-flex align-items-center">
          <i className="bi bi-people-fill"></i>
          <span className="label">User list</span>
        </NavLink>
        <a className="dropdown-item d-flex align-items-center" href="/admin/accesslog">
          <i className="bi bi-unlock-fill"></i>
          <span className="label">Access log</span>
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/admin/devblog">
          <i className="bi bi-book-half"></i>
          <span className="label">Dev Blog</span>
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/release-schedule" target="_blank">
          <i className="bi bi-github"></i>
          <span className="label">Release Schedule</span>
          <i className="bi bi-box-arrow-up-right ms-auto"></i>
        </a>
        <div className="dropdown-divider"></div>
        <h6 className="dropdown-header">Settings</h6>
        <a className="dropdown-item d-flex align-items-center" href="/users/id/passwordchange">
          <i className="bi bi-key-fill"></i>
          <span className="label">Change password</span>
        </a>
        <div className="dropdown-divider"></div>
        <h6 className="dropdown-header">Preferences</h6>
        <form>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-moon-fill"></i>
            <span className="label">Dark Mode</span>
            <label className="switch ms-auto">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-link-45deg"></i>
            <span className="label">Some other toggle</span>
            <label className="switch ms-auto">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-link-45deg"></i>
            <span className="label">some other toggle</span>
            <label className="switch ms-auto">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-link-45deg"></i>
            <span className="label">some other toggle</span>
            <label className="switch ms-auto">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item d-flex align-items-center" href="/auth/logout">
          <i className="bi bi-door-open-fill"></i>
          <span className="label">Log out</span>
        </a>
      </div>
    </li>
  )
}

export default UserMenuDropdown;