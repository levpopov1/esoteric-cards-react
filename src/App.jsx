import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVendors } from './redux/slices/vendorsSlice';
import { fetchDecks } from './redux/slices/decksSlice';

// Views
import Home from './views/Home';
import CardGames from './views/CardGames';
import TarotCards from './views/TarotCards';
import Auth from './views/Auth';
import NotFound from './views/NotFound';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DeckList from './components/DeckList';
import CardList from './components/CardList';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors()); 
    dispatch(fetchDecks()); 
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <div className="grid-container">
          <Sidebar/>
          <div className="main">
        <Navbar/>
            <div className="container-fluid">
              <Switch>
                <Route path="/playing-cards/:vendor/:deck">
                  <CardList/>
                </Route>
                <Route path="/playing-cards/:vendor">
                  <DeckList/>
                </Route>
                <Route path="/playing-cards">
                  <DeckList/>
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
        </div>
      </div>
    </Router>
  );
}

export default App;
