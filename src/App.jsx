import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVendors } from './redux/slices/vendorsSlice';
import { fetchDecks } from './redux/slices/decksSlice';

// Views
import Main from './views/Main';
import Home from './views/Home';
import DecksView from './views/DecksView';
import CardsView from './views/CardsView';
import VendorsView from './views/VendorsView';
import Auth from './views/Auth';
import NotFound from './views/NotFound';

// components
import RandomDeck from './components/RandomDeck';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors());
    dispatch(fetchDecks());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/playing-cards/:vendor/:deck" element={<CardsView />} />
            <Route path="/playing-cards/:vendor" element={<DecksView category="playing-cards" />} />
            <Route path="/playing-cards" element={<DecksView category="playing-cards" />} />
            <Route path="/card-games/:vendor/:deck" element={<CardsView />} />
            <Route path="/card-games/:vendor" element={<DecksView category="card-games" />} />
            <Route path="/card-games" element={<DecksView category="card-games" />} />
            <Route path="/tarot-cards" element={<DecksView category="tarot-cards" />} />
            <Route path="/vendors" element={<VendorsView />} />
            <Route path="/random" element={<RandomDeck />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
