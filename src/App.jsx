import React from 'react';
// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Views
import PlayingCards from './views/PlayingCards';
import CardGames from './views/CardGames';
import TarotCards from './views/TarotCards';
import Home from './views/Home';
import Auth from './views/Auth';
import NotFound from './views/NotFound';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="grid-container">
          <Sidebar/>
          <Switch>
            <Route path="/playing-cards">
              <PlayingCards/>
            </Route>
            <Route path="/card-games">
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
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
