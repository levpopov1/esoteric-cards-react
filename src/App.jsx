import React from 'react';
// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="grid-container">
          <Sidebar/>
          <Switch>
            <Route path="/playing-cards/:vendor" component={PlayingCards}></Route>
            <Route path="/card-games/:vendor" component={CardGames}></Route>
            <Route path="/tarot-cards" component={TarotCards}></Route>
            <Route path="/auth" component={Auth}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
