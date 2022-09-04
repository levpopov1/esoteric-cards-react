import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Auth from './pages/Auth';
import Home from './pages/Home';
import PlayingCards from './pages/PlayingCards';
import CardGames from './pages/CardGames';
import TarotCards from './pages/TarotCards';
import Vendors from './pages/Vendors';

// Views
import Main from './views/Main';
import NotFound from './views/NotFound';
import AuthView from './views/Authview';

// components
import RandomDeck from './components/RandomDeck';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth/*" element={<AuthView />}>
            <Route path="*" element={<Auth />} />
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
