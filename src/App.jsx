import React from 'react';
// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Views
import PlayingCards from './views/PlayingCards';
import CardGames from './views/CardGames';
import TarotCards from './views/TarotCards';
import Home from './views/Home';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
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
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
