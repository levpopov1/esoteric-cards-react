import { NavLink } from 'react-router-dom';
import DropdownCard from './DropdownCard';

function Navbar() {



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 ">
      <NavLink to="/" className="navbar-brand">ESOTERIC CARDS</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarMain">
        <ul className="navbar-nav w-100">
          <li className="nav-item dropdown initial">
            <button className="btn nav-link dropdown-toggle" id="playingCards" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Playing Cards
            </button>
            <div id="playingCardsDropdown" className="w-100 dropdown-menu m-0" aria-labelledby="playingCards">
              <div className="container-fluid d-block">
                <div className="row">
                  <DropdownCard />
                </div>
              </div>
            </div>
          </li>   
          <li className="nav-item dropdown initial">
            <button className="btn nav-link dropdown-toggle" id="cardGames" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Card Games
            </button>
            <div id="cardGamesDropdown" className="w-100 dropdown-menu m-0" aria-labelledby="cardGames">
              <div className="container-fluid d-block">
                <div className="row">
                  <DropdownCard />
                </div>
              </div>
            </div>
          </li>  
          <li className="nav-item">
            <NavLink to="/tarot-cards" className="nav-link">Tarot Cards</NavLink>
          </li> 
          <div className="input-group flex-grow-1 w-auto" id="global-app-search">
            <input className="form-control" type="text" value="" placeholder="Search..."/>
            <div className="input-group-append">
                <button className="btn " type="button" id="button-addon2">
                    <i className="fas fa-search"></i>
                </button>
            </div>
          </div>
          <li className="nav-item">
            <a className="nav-link" href="#" title="Favourite">
              <i className="fas fa-star"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" title="Refresh">
              <i className="fas fa-sync"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" title="Notifications">
              <i className="fas fa-bell"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" title="Settings">
              <i className="fas fa-cog"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
