import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDecks, selectDeckByVendorName } from '../redux/slices/decksSlice';
import { fetchVendors, setCurrentVendor} from '../redux/slices/vendorsSlice';
import Deck from '../components/Deck';

function PlayingCards({match}) {

  const dispatch = useDispatch();
  const currentVendor = useSelector(state => state.vendors.currentVendor);
  const decks = useSelector(state => selectDeckByVendorName(state, currentVendor.name));
  const deckStatus = useSelector(state => state.decks.status);
  const errorMessage = useSelector(state => state.decks.error);
  const vendorStatus = useSelector(state => state.vendors.status);

  useEffect(() => {
    if(vendorStatus === 'idle'){
      dispatch(fetchVendors());
    }
    if(deckStatus === 'idle'){
      dispatch(fetchDecks());
    }
  }, [dispatch, deckStatus, vendorStatus]);

  useEffect(() => {
    if(vendorStatus === 'succeeded'){
      dispatch(setCurrentVendor(match.params.vendor));
    }
  }, [dispatch, vendorStatus, match.params.vendor]);

  // let content;

  // if(deckStatus === 'loading'){
  //   content = <div className="loader">Loading...</div>
  // }
  // else if(deckStatus === 'succeeded'){
  //   content = decks.map(item => 
  //     <p key={item._id}>{item.name}</p>
  //   );
  // }
  // else if(deckStatus === 'failed'){
  //   content = <div>{errorMessage}</div>
  // }

  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          {decks.map(deck => <Deck key={deck._id} deck={deck}/>)}
        </div>
      </div>
    </div>
  );
}

export default PlayingCards;
