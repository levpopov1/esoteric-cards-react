import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDeckByRouteParams } from '../redux/slices/decksSlice';

import Breadcrumbs from '../components/Breadcrumbs';
import CardList from '../components/CardList';

function CardsView() {
  const params = useParams();
  const currentDeck = useSelector((state) => selectDeckByRouteParams(state, params));

  return (
    <div className="container-fluid">
      <Breadcrumbs />
      <CardList currentDeck={currentDeck} />
    </div>
  );
}

export default CardsView;
