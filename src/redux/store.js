import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// To use this: 

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// import { addItem } from './actions';
// store.dispatch(addItem("whatever"));

// and in the destructor function of useEffect: 
// unsubscribe();

export default store;