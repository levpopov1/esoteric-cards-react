import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardsView from '../views/CardsView';
import DecksView from '../views/DecksView';

function TarotCards() {
  return (
    <Routes>
      <Route path="/:vendor/:deck" element={<CardsView />} />
      <Route path="/:vendor" element={<DecksView category="tarot-cards" />} />
      <Route index element={<DecksView category="tarot-cards" />} />
    </Routes>
  );
}

export default TarotCards;
