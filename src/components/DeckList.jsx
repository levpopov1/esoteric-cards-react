import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDecks, selectDeckByVendorName } from '../redux/slices/decksSlice';
import { fetchVendors, setCurrentVendor, selectAllVendors} from '../redux/slices/vendorsSlice';
import Deck from './Deck';

function DeckList({decks}) {

  // const routeParams = useParams();
  // const dispatch = useDispatch();
  // const vendors = useSelector(selectAllVendors);
  // const currentVendor = useSelector(state => state.vendors.currentVendor);
  // const decks = useSelector(state => selectDeckByVendorName(state, currentVendor.name));
  // // const deckStatus = useSelector(state => state.decks.status);
  // // const errorMessage = useSelector(state => state.decks.error);
  // // const vendorStatus = useSelector(state => state.vendors.status);

  // useEffect(() => {
  //   dispatch(fetchDecks());
  // }, [dispatch]);
    
  // useEffect(() => {
  //   if(vendors.length !== 0){
  //     dispatch(setCurrentVendor(routeParams.vendor));
  //   }
  // }, [dispatch, vendors, routeParams.vendor]);

  // // let content;

  // // if(deckStatus === 'loading'){
  // //   content = <div className="loader">Loading...</div>
  // // }
  // // else if(deckStatus === 'succeeded'){
  // //   content = decks.map(item => 
  // //     <p key={item._id}>{item.name}</p>
  // //   );
  // // }
  // // else if(deckStatus === 'failed'){
  // //   content = <div>{errorMessage}</div>
  // // }

  return (
    <div className="row">
      {decks.map(deck => <Deck key={deck._id} deck={deck}/>)}
    </div>
  );
}

export default DeckList;
