import * as actions from './actionTypes';

export function addItem(payload){
  return {
    type: actions.ADD_ITEM,
    payload: payload
  }
}

export function removeItem(){
  return {
    type: actions.REMOVE_ITEM
  }
}


export function fetchDecksPending(){
  return {
    type: actions.FETCH_DECKS_PENDING
  }
}

export function fetchDecksSuccess(decks){
  return {
    type: actions.FETCH_DECKS_SUCCESS,
    payload: decks
  }
}

export function fetchDecksError(error){
  return {
    type: actions.FETCH_DECKS_ERROR,
    payload: error
  }
}

export function addDeck(deck){
  return {
    type: actions.ADD_DECK,
    payload: deck
  }
}

export function removeDeck(){
  return {
    type: actions.REMOVE_DECK
  }
}


