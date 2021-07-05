import React from 'react';
import { Switch, Route } from 'react-router-dom';
import VendorList from '../components/VendorList';
import DeckList from '../components/DeckList';

function VendorsView() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/vendors/:vendor">
          <DeckList/>
        </Route>
        <Route exact path="/vendors">
          <VendorList/>
        </Route>
      </Switch>
    </div>
  )
}

export default VendorsView
