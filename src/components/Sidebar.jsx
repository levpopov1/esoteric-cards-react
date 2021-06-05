import React from 'react'

function Sidebar() {
  return (
    <nav class="sidebar main-bg-color-vertical">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <p class="sidebar-navblock-header">
            Favourites
          </p>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="">
              <i class="bi bi-star-fill"></i>
              <span class="label">itemName</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
        </ul>
        <hr/>
        <ul class="nav flex-column">
          <p class="sidebar-navblock-header">
            Logs
          </p>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/windows">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Windows</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/firewall">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Firewall</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/isensor">
              <i class="bi bi-grid-fill"></i>
              <span class="label">iSensor</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/redcloak">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Redcloak Events</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/lastline">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Lastline Traffic</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/dns">
              <i class="bi bi-grid-fill"></i>
              <span class="label">DNS</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/vpn">
              <i class="bi bi-grid-fill"></i>
              <span class="label">VPN</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="/logs/web">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Web Traffic</span>
              <i class="bi bi-chevron-right ms-auto"></i>
            </a>
          </li>
        </ul>
        <hr/>
        <ul class="nav flex-column">
          <p class="sidebar-navblock-header">
            Intelligence Accounts
          </p>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#" target="_blank">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Twitter</span>
              <i class="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#" target="_blank">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Facebook</span>
              <i class="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#" target="_blank">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Instagram</span>
              <i class="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#" target="_blank">
              <i class="bi bi-grid-fill"></i>
              <span class="label">GSE</span>
              <i class="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#" target="_blank">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Linked-In</span>
              <i class="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#" target="_blank">
              <i class="bi bi-grid-fill"></i>
              <span class="label">Gmail</span>
              <i class="bi bi-box-arrow-up-right ms-auto"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar;