import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import Card from './Card';

function CardList() {

  const params = useParams();
  const [currentDeck, setCurrentDeck] = useState({
    cards: []
  });

  const [showCardBack, setShowCardBack] = useState(false);
  
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
  else if(status === 'succeeded' && storeDeck.cards.length === 0){
    sideEffects = <div className="text-center p-3">No cards in this deck.</div>
  }

  return (
    <div className="row">
      {sideEffects}
      {
        status === 'succeeded' && currentDeck.name &&
        <div className="col-sm-12">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className="display-5 my-3">{currentDeck.vendor + " | " + currentDeck.name}</h1>
            <button className="btn btn-primary" onClick={() => setShowCardBack(prev => !prev)}>
              Flip All
            </button>
          </div>
        </div>
      }
      {
        currentDeck.cards.map(card => <Card key={card.card_id} card={card} showCardBack={showCardBack}/>)
      }
    </div>
  );
}

export default CardList;
