import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVendors } from '../redux/slices/vendorsSlice';
import { NavLink } from 'react-router-dom';
import DropdownCard from './DropdownCard';
import UserMenuDropdown from './UserMenuDropdown';

function Navbar() {

  const dispatch = useDispatch();
  const vendorStatus = useSelector(state => state.vendors.status);
  const playingCardVendors = useSelector(state => state.vendors.data.filter(vendor => vendor.category === "Playing Cards"));
  const cardGamedVendors = useSelector(state => state.vendors.data.filter(vendor => vendor.category === "Card Games"));

  useEffect(() => {
    if(vendorStatus === 'idle'){
      dispatch(fetchVendors());
    }
  }, [dispatch, vendorStatus]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <NavLink to="/" className="navbar-brand">ESOTERIC CARDS</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarMain">
        <ul className="navbar-nav w-100">
          <li className="nav-item dropdown initial">
            <button className="btn nav-link dropdown-toggle" id="playingCards" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Playing Cards
            </button>
            <div id="playingCardsDropdown" className="w-100 dropdown-menu m-0" aria-labelledby="playingCards">
              <div className="container-fluid d-block">
                <div className="row">
                  {playingCardVendors.map(vendor => <DropdownCard key={vendor._id} vendor={vendor} category={{name: "Playing Cards", slug: "playing-cards"}}/>)}
                </div>
              </div>
            </div>
          </li>   
          <li className="nav-item dropdown initial">
            <button className="btn nav-link dropdown-toggle" id="cardGames" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Card Games
            </button>
            <div id="cardGamesDropdown" className="w-100 dropdown-menu m-0" aria-labelledby="cardGames">
              <div className="container-fluid d-block">
                <div className="row">
                  {cardGamedVendors.map(vendor => <DropdownCard key={vendor._id} vendor={vendor} category={{name: "Card Games", slug: "card-games"}}/>)}
                </div>
              </div>
            </div>
          </li>  
          <li className="nav-item">
            <NavLink to="/tarot-cards" className="nav-link">Tarot Cards</NavLink>
          </li> 
          <div className="input-group flex-grow-1 w-auto" id="global-app-search">
            <input className="form-control" type="text" id="search" placeholder="Search..."/>
            <button className="btn btn-outline" type="button" id="button-addon2">
                <i className="bi bi-search"></i>
            </button>
          </div>
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
    </nav>
  );
}

export default Navbar;
