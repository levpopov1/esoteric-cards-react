import React from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import { selectRandomDeck } from '../redux/slices/decksSlice';
import CardList from './CardList';

function RandomDeck() {

  const deck = useSelector(selectRandomDeck);

  return (
    <div className="container-fluid">
      <CardList deck={deck}/>
    </div>
  )
}

export default RandomDeck
