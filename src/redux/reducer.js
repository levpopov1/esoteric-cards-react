import { combineReducers } from 'redux';
import * as actions from './actionTypes';

function someReducer(state = [1, 2], action){
  switch (action.type) {
    case actions.ADD_ITEM:
      return [...state, action.payload]
    case actions.REMOVE_ITEM:
        return [...state.slice(0, -1)]
    case actions.UPDATE_ITEM:
      return {...state}  
    default:
      return state
  }
}

// function anotherReducer(state = [], action){
//   switch (action.type) {
//     case actions.ADD_ITEM:
//       return {...state}  
//     case actions.REMOVE_ITEM:
//         return {...state}  
//     case actions.UPDATE_ITEM:
//       return {...state}  
//     default:
//       return state
//   }
// }


const rootReducer = combineReducers({
  some: someReducer,
  // another: anotherReducer
});

export default rootReducer;