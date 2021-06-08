import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVendors } from './redux/slices/vendorsSlice';
import { fetchDecks } from './redux/slices/decksSlice';

// Views
import Home from './views/Home';
import PlayingCards from './views/PlayingCards';
import CardGames from './views/CardGames';
import TarotCards from './views/TarotCards';
import Auth from './views/Auth';
import NotFound from './views/NotFound';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VendorList from './components/VendorList';
import DeckList from './components/DeckList';
import CardList from './components/CardList';
import Deck from './components/Deck';

function App() {

  const dispatch = useDispatch();
  // const vendorStatus = useSelector(state => state.vendors.status);
  // const deckStatus = useSelector(state => state.decks.status);

  useEffect(() => {
    dispatch(fetchVendors()); 
    dispatch(fetchDecks()); 
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="grid-container">
          <Sidebar/>
          <Switch>
            <Route path="/playing-cards/:vendor/:deck">
              <CardList/>
            </Route>
            <Route path="/playing-cards/:vendor">
              <PlayingCards/>
            </Route>
            <Route path="/playing-cards">
              <PlayingCards/>
            </Route>
            <Route path="/card-games/:vendor">
              <CardGames/>
            </Route>
            <Route path="/tarot-cards">
              <TarotCards/>
            </Route>
            <Route path="/auth">
              <Auth/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
