import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Security from './pages/Security';
import Home from './pages/Home';
import PlayingCards from './pages/PlayingCards';
import CardGames from './pages/CardGames';
import TarotCards from './pages/TarotCards';
import Vendors from './pages/Vendors';

// Views
import Main from './views/Main';
import NotFound from './views/NotFound';
import Auth from './views/Auth';

// components
import RandomDeck from './components/RandomDeck';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth/*" element={<Auth />}>
            <Route path="*" element={<Security />} />
          </Route>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="playing-cards/*" element={<PlayingCards />} />
            <Route path="card-games/*" element={<CardGames />} />
            <Route path="tarot-cards/*" element={<TarotCards />} />
            <Route path="vendors/*" element={<Vendors />} />
            <Route path="random" element={<RandomDeck />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
