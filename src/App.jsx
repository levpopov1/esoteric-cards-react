import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVendors } from './redux/slices/vendorsSlice';
import { fetchDecks } from './redux/slices/decksSlice';

// Views
import Home from './views/Home';
import DecksView from './views/DecksView';
import CardsView from './views/CardsView';
import VendorsView from './views/VendorsView';
import Auth from './views/Auth';
import NotFound from './views/NotFound';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import DeckList from './components/DeckList';
// import CardList from './components/CardList';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors()); 
    dispatch(fetchDecks()); 
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth/:action">
            <Auth/>
          </Route>
          <Route exact path="/auth">
            <Auth/>
          </Route>
          <Route>
            <div className="grid-container">
              <Sidebar/>
              <div className="main">
                <Navbar/>
                <Switch>
                  <Route path="/playing-cards/:vendor/:deck">
                    <CardsView/>
                  </Route>
                  <Route path="/playing-cards/:vendor">
                    <DecksView category="playing-cards"/>
                  </Route>
                  <Route path="/playing-cards">
                    <DecksView category="playing-cards"/>
                  </Route>
                  <Route path="/card-games/:vendor/:deck">
                    <CardsView/>
                  </Route>
                  <Route path="/card-games/:vendor">
                    <DecksView category="card-games"/>
                  </Route>
                  <Route path="/card-games">
                    <DecksView category="card-games"/>
                  </Route>
                  <Route path="/tarot-cards">
                    <DecksView category="tarot-cards"/>
                  </Route>
                  <Route path="/vendors">
                    <VendorsView/>
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
