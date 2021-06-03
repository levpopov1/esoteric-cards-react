import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/actions';

function Home() {
  const somestate = useSelector(state => state.some);
  const dispatch = useDispatch();


  return (
    <div className="Home">
      Home {somestate}
      <button onClick={() => dispatch(addItem(4))}>Add item</button>
      <button onClick={() => dispatch(removeItem())}>Remove item</button>
    </div>
  );
}

export default Home;
