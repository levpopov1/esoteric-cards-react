import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectPlayingCardVendors, selectCardGameVendors } from '../redux/slices/vendorsSlice';
import DropdownCard from './DropdownCard';
import UserMenuDropdown from './UserMenuDropdown';

function Navbar() {

  const playingCardVendors = useSelector(selectPlayingCardVendors);
  const cardGamedVendors = useSelector(selectCardGameVendors);

  const playingcardsTop5 = playingCardVendors.slice(0, 5).map(vendor => <DropdownCard key={vendor._id} vendor={vendor} category={{name: "Playing Cards", slug: "playing-cards"}}/>);
  const cardGamesTop5 = cardGamedVendors.slice(0,5).map(vendor => <DropdownCard key={vendor._id} vendor={vendor} category={{name: "Card Games", slug: "card-games"}}/>);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* <NavLink to="/" className="navbar-brand">ESOTERIC CARDS</NavLink> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          {/* <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown initial">
              <button className="btn nav-link dropdown-toggle" id="playingCards" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Playing Cards
              </button>
              <div id="playingCardsDropdown" className="fullwidth-dropdown w-100 dropdown-menu m-0" aria-labelledby="playingCards">
                <div className="container-fluid d-block">
                  <div className="row">
                    {playingcardsTop5}
                    <div className="col-sm-2 my-3">
                      <div className="card">
                        <div className="card-body">
                          <Link to="/playing-cards" className="card-link stretched-link">
                            All Playing Cards
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>   
            <li className="nav-item dropdown initial">
              <button className="btn nav-link dropdown-toggle" id="cardGames" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Card Games
              </button>
              <div id="cardGamesDropdown" className="fullwidth-dropdown w-100 dropdown-menu m-0" aria-labelledby="cardGames">
                <div className="container-fluid d-block">
                  <div className="row">
                    {cardGamesTop5}
                  </div>
                </div>
              </div>
            </li>  
            <li className="nav-item">
              <NavLink to="/tarot-cards" className="btn nav-link">Tarot Cards</NavLink>
            </li> 
          </ul> */}
          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-outline-light-gray  me-3" type="button" id="sidebar-toggler">
              {/* <i className="bi bi-arrow-bar-left"></i> */}
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
            <UserMenuDropdown/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
