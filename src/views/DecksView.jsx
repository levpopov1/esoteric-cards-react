import Breadcrumbs from '../components/Breadcrumbs';
import DeckList from '../components/DeckList';

function DecksView({ category }) {
  return (
    <>
      <Breadcrumbs />
      <DeckList category={category} />
    </>
  );
}

export default DecksView;
