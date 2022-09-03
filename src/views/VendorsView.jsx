import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorList from '../components/VendorList';
import DeckList from '../components/DeckList';

function VendorsView() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/vendors/:vendor" element={<DeckList />} />
        <Route exact path="/vendors" element={<VendorList />} />
      </Routes>
    </div>
  );
}

export default VendorsView;
