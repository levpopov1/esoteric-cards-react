import * as actions from './actionTypes';

export function addItem(payload){
  return {
    type: actions.ADD_ITEM,
    payload: payload
  }
}