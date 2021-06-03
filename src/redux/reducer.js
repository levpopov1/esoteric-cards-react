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

const initialState = {
  error: null,
  pending: false,
  decks: []
}

function decksReducer(state = initialState, action){
  switch(action.type) {
    case actions.FETCH_DECKS_PENDING: 
      return {
          ...state,
          pending: true
      }
    case actions.FETCH_DECKS_SUCCESS:
      return {
          ...state,
          pending: false,
          decks: action.payload
      }
    case actions.FETCH_DECKS_ERROR:
      return {
          ...state,
          pending: false,
          error: action.payload
      }
    case actions.ADD_DECK:
      return {
        ...state,
        decks: [...state.decks, action.payload]
      }
    case actions.REMOVE_DECK:
      return {
        ...state,
        decks: [...state.decks.slice(0, -1)]
      }
    default: 
      return state;
  }
}


const rootReducer = combineReducers({
  some: someReducer,
  decks: decksReducer
});

export default rootReducer;