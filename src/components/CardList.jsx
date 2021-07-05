import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import Card from './Card';

function CardList({currentDeck, children}) {

  const [sideEffects, setSideEffects] = useState(null);
  const [showCardBack, setShowCardBack] = useState(false);
  const error = useSelector(state => state.decks.error);
  const status = useSelector(state => state.decks.status);

  useEffect(() => {
    switch (status) {
      case "loading":
        setSideEffects(<div className="loader text-center p-3">Loading...</div>);
        break;
      case "failed":
        setSideEffects(<div>{error}</div>);
        break;
      case "succeeded":
        if(!currentDeck){
          setSideEffects(<div className="text-center p-3">Deck not found.</div>);
        }
        else if(currentDeck.cards.length === 0){
          setSideEffects(<div className="text-center p-3">No cards in this deck.</div>);
        }
        else{
          setSideEffects(null);
        }
        break;
      default:
        setSideEffects(null);
        break;
    }
  }, [status, error, currentDeck]);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="display-5 my-3">
            {currentDeck.vendor + " | " + currentDeck.name}
          </h1>
          <button className="btn btn-primary" onClick={() => setShowCardBack(prev => !prev)}>
            Flip All
          </button>
        </div>
        {sideEffects}
      </div>
      <div className="col-sm-12 d-flex justify-content-center">
        {children}
      </div>
      {
        currentDeck.cards.map(card => <Card key={card.card_id} card={card} showCardBack={showCardBack}/>)
      }
    </div>
  );
}

export default CardList;
