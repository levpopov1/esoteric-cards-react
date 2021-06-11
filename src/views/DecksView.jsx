import DeckList from '../components/DeckList';

function DecksView({category}) {
  return (
    <div className="container-fluid">
      <DeckList category={category}/>
    </div>
  );
}

export default DecksView;
