import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { selectAllDecks } from '../redux/slices/decksSlice';
import DeckList from '../components/DeckList';

function PlayingCards() {

  const params = useParams();

  let filter;

  if(params.vendor){
    filter = (state) => {
      return state.decks.data.filter(deck => deck.vendor_slug === params.vendor);
    }
  }
  else{
    filter = selectAllDecks;
  }

  const decks = useSelector(filter);
  const error = useSelector(state => state.decks.error);
  const status = useSelector(state => state.decks.status);

  let sideEffects;

  if(status === 'loading'){
    sideEffects = <div className="loader">Loading...</div>
  }
  else if(status === 'failed'){
    sideEffects = <div>{error}</div>
  }

  return (
    <div className="main">
      <div className="container-fluid">
        {sideEffects}
        <DeckList decks={decks}/>
      </div>
    </div>
  );
}

export default PlayingCards;
