import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardsView from '../views/CardsView';
import DecksView from '../views/DecksView';

function PlayingCards() {
  return (
    <Routes>
      <Route path="/:vendor/:deck" element={<CardsView />} />
      <Route path="/:vendor" element={<DecksView category="playing-cards" />} />
      <Route index element={<DecksView category="playing-cards" />} />
    </Routes>
  );
}

export default PlayingCards;
