import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDecks, selectAllDecks } from '../redux/slices/decksSlice';

function Home() {
  const dispatch = useDispatch();
  const decks = useSelector(selectAllDecks);
  const deckStatus = useSelector(state => state.decks.status);
  const errorMessage = useSelector(state => state.decks.error);

  useEffect(() => {
    if(deckStatus === 'idle'){
      dispatch(fetchDecks());
    }
  }, [dispatch, deckStatus]);

  let content;

  if(deckStatus === 'loading'){
    content = <div className="loader">Loading...</div>
  }
  else if(deckStatus === 'succeeded'){
    content = decks.map(item => 
      <p key={item._id}>{item.name}</p>
    );
  }
  else if(deckStatus === 'failed'){
    content = <div>{errorMessage}</div>
  }


  return (
    <div className="main">
      {content}
    </div>
  );
}

export default Home;
