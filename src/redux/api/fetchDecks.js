import { fetchDecksSuccess, fetchDecksError, fetchDecksPending } from '../actions';

const API_URL = 'http://localhost:5000/api/v1';

function fetchDecks(){
  return dispatch => {
    dispatch(fetchDecksPending());
    fetch(API_URL + "/decks")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      // if(res.error){
      //   throw new Error(`API request error. Status: ${res.status} - ${res.statusText}`);
      // }
      dispatch(fetchDecksSuccess(res));
    })
    .catch(error => {
      dispatch(fetchDecksError(error));
    })
  }
}

export default fetchDecks;