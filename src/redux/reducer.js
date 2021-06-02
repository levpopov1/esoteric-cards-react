import * as actions from './actionTypes';

export default function reducer(state = [], action){
  switch (action.type) {
    case actions.ADD_ITEM:
      return {...state}  
    case actions.REMOVE_ITEM:
        return {...state}  
    case actions.UPDATE_ITEM:
      return {...state}  
    default:
      return state
  }
}