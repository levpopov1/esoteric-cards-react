const API_URL = 'http://localhost:5000/api/v1';

export default async function makeAPIRequest(endpoint, requestOptions = {}){

  if(Object.keys(requestOptions).length === 0){
    requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  try {
    const response = await fetch(API_URL + endpoint, requestOptions);
    const data = await response.json();

    if(!response.ok){
      return {error: data.errors, data: null}
      // throw new Error(`API request error. Status: ${response.status} - ${response.statusText}`);
    }
    return {error: null, data: data};
  } 
  catch (error) {
    return {error: error, data: null}
  }

}