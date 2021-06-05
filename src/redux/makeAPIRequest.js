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
    if(!response.ok){
      throw new Error(`API request error. Status: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } 
  catch (error) {
    throw new Error(`API request error: ${error}`);
  }

}