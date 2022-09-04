import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardsView from '../views/CardsView';
import DecksView from '../views/DecksView';

function CardGames() {
  return (
    <Routes>
      <Route path="/:vendor/:deck" element={<CardsView />} />
      <Route path="/:vendor" element={<DecksView category="card-games" />} />
      <Route index element={<DecksView category="card-games" />} />
    </Routes>
  );
}

export default CardGames;
