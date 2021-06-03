import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { addItem, removeItem, addDeck, removeDeck } from '../redux/actions';
import fetchDecks from '../redux/api/fetchDecks';

function Home() {
  const somestate = useSelector(state => state.some);
  const {decks} = useSelector(state => state.decks);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDecks()(dispatch);
  }, [dispatch]);

  console.log(decks)

  return (
    <div className="Home">
      <button onClick={() => dispatch(addDeck({name: "new deck"}))}>Add item</button>
      <button onClick={() => dispatch(removeDeck())}>Remove item</button>
      {/* Home {somestate}
      <button onClick={() => dispatch(addItem(4))}>Add item</button>
      <button onClick={() => dispatch(removeItem())}>Remove item</button> */}
      {
        decks.map(item => 
          <p key={item._id}>{item.name}</p>
        )
      }
    </div>
  );
}

export default Home;
