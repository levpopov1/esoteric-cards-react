import Breadcrumbs from '../components/Breadcrumbs';
import DeckList from '../components/DeckList';

function DecksView({ category }) {
  return (
    <div className="container-fluid">
      <Breadcrumbs />
      <DeckList category={category} />
    </div>
  );
}

export default DecksView;
