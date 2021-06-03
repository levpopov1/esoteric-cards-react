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