import React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { selectRandomDeck, incrementRng } from '../redux/slices/decksSlice';
import CardList from './CardList';

function RandomDeck() {

  const [rng, setRng] = useState(0);
  const deck = useSelector(selectRandomDeck);
  const dispatch = useDispatch();
  
  const reRoll = () => {
    // this has to exist to force useSelector to re-run
    // as it only runs when the Redux state changes
    // the rng value does not actually mean anything, 
    // it just forces a state change
    setRng(prev => prev+1);
    dispatch(incrementRng(rng));
  }

  return (
    <div className="container-fluid">
      <CardList currentDeck={deck}>
        <button className="btn btn-outline-dark px-3" onClick={reRoll}>Reroll</button>
      </CardList>
    </div>
  )
}

export default RandomDeck
