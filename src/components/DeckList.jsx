import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllDecks } from '../redux/slices/decksSlice';
import Deck from './Deck';

function DeckList({ category }) {
  const params = useParams();

  const filter = useMemo(() => {
    if (category && params.vendor) {
      return (state) => {
        return state.decks.data.filter(
          (deck) => deck.category_slug === category && deck.vendor_slug === params.vendor
        );
      };
    } else if (category && !params.vendor) {
      return (state) => {
        return state.decks.data.filter((deck) => deck.category_slug === category);
      };
    } else if (params.vendor && !category) {
      return (state) => {
        return state.decks.data.filter((deck) => deck.vendor_slug === params.vendor);
      };
    }
    return selectAllDecks;
  }, [params, category]);

  const decks = useSelector(filter);
  const error = useSelector((state) => state.decks.error);
  const status = useSelector((state) => state.decks.status);

  let sideEffects;

  if (status === 'loading') {
    sideEffects = <div className="loader text-center p-3">Loading...</div>;
  } else if (status === 'failed') {
    sideEffects = <div>{error}</div>;
  } else if (status === 'succeeded' && decks.length === 0) {
    sideEffects = <div className="text-center p-3">No decks found.</div>;
  }

  return (
    <div className="row">
      {sideEffects}
      {decks.map((deck) => (
        <Deck key={deck._id} deck={deck} />
      ))}
    </div>
  );
}

export default DeckList;
