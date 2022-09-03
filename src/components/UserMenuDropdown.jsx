import { Link } from 'react-router-dom';

function UserMenuDropdown({ user }) {
  return (
    <li className="nav-item dropdown" id="user-icon">
      <button
        className="btn nav-link dropdown-toggle"
        id="userSettings"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        <i className="bi bi-person-circle" id="usericon"></i>
        <span className="label">{user?.username || 'Guest'}</span>
      </button>
      <div
        id="userSettingsDropdown"
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="userSettings"
      >
        <Link className="dropdown-item d-flex align-items-center" to="/users/id">
          <i className="bi bi-person-badge-fill"></i>
          <span className="label">View Profile</span>
        </Link>
        <div className="dropdown-divider"></div>
        <h6 className="dropdown-header">Admin panel</h6>
        <Link to="/users" className="dropdown-item d-flex align-items-center">
          <i className="bi bi-people-fill"></i>
          <span className="label">User list</span>
        </Link>
        <Link className="dropdown-item d-flex align-items-center" to="/admin/accesslog">
          <i className="bi bi-unlock-fill"></i>
          <span className="label">Access log</span>
        </Link>
        <Link className="dropdown-item d-flex align-items-center" to="/admin/devblog">
          <i className="bi bi-book-half"></i>
          <span className="label">Dev Blog</span>
        </Link>
        <Link
          className="dropdown-item d-flex align-items-center"
          to="/release-schedule"
          target="_blank"
        >
          <i className="bi bi-github"></i>
          <span className="label">Release Schedule</span>
          <i className="bi bi-box-arrow-up-right ms-auto"></i>
        </Link>
        <div className="dropdown-divider"></div>
        <h6 className="dropdown-header">Settings</h6>
        <Link className="dropdown-item d-flex align-items-center" to="/users/id/passwordchange">
          <i className="bi bi-key-fill"></i>
          <span className="label">Change password</span>
        </Link>
        <div className="dropdown-divider"></div>
        <h6 className="dropdown-header">Preferences</h6>
        <form>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-moon-fill"></i>
            <span className="label">Dark Mode</span>
            <label className="switch ms-auto">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-link-45deg"></i>
            <span className="label">Some other toggle</span>
            <label className="switch ms-auto">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-link-45deg"></i>
            <span className="label">some other toggle</span>
            <label className="switch ms-auto">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="dropdown-item-static d-flex align-items-center">
            <i className="bi bi-link-45deg"></i>
            <span className="label">some other toggle</span>
            <label className="switch ms-auto">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item d-flex align-items-center" to="/auth/logout">
          <i className="bi bi-door-open-fill"></i>
          <span className="label">Log out</span>
        </Link>
      </div>
    </li>
  );
}

export default UserMenuDropdown;
