import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

// To use this: 

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// import { addItem } from './actions';
// store.dispatch(addItem("whatever"));

// and in the destructor function of useEffect: 
// unsubscribe();

export default store;