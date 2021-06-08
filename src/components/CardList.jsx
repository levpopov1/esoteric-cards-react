import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import Card from './Card';

function CardList() {

  const params = useParams();
  const [currentDeck, setCurrentDeck] = useState({
    cards: []
  });
  
  const storeDeck = useSelector(state => state.decks.data.find(deck => deck.vendor_slug === params.vendor && deck.slug === params.deck));
  const error = useSelector(state => state.decks.error);
  const status = useSelector(state => state.decks.status);

  useEffect(() => {
    if(storeDeck){
      setCurrentDeck(storeDeck);
    }
  }, [storeDeck]);

  let sideEffects;

  if(status === 'loading'){
    sideEffects = <div className="loader text-center p-3">Loading...</div>
  }
  else if(status === 'failed'){
    sideEffects = <div>{error}</div>
  }
  else if(status === 'succeeded' && currentDeck.cards.length === 0){
    sideEffects = <div className="text-center p-3">No cards in this deck.</div>
  }

  return (
    <div className="row">
      {sideEffects}
      {currentDeck.cards.map(card => <Card key={card.card_id} card={card}/>)}
    </div>
  );
}

export default CardList;
