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

  useEffect(() => {
    if(storeDeck){
      setCurrentDeck(storeDeck);
    }
  }, [storeDeck]);

  return (
    <div className="row">
      {currentDeck.cards.map(card => <Card key={card.card_id} card={card}/>)}
    </div>
  );
}

export default CardList;
