import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorList from '../components/VendorList';
import DeckList from '../components/DeckList';

function Vendors() {
  return (
    <Routes>
      <Route path="/:vendor" element={<DeckList />} />
      <Route index element={<VendorList />} />
    </Routes>
  );
}

export default Vendors;
