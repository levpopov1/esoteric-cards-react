const API_URL = 'http://localhost:5000/api/v1';

export default async function makeAPIRequest(endpoint, requestOptions = {}, accessToken=""){


  console.log("acctoke", accessToken);

  if(Object.keys(requestOptions).length === 0){
    requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${accessToken}`
      }
    }
  }

  try {
    const response = await fetch(API_URL + endpoint, requestOptions);
    const data = await response.json();

    console.log(response);
    console.log(data);
    
    if(data.errors){
      return Promise.reject(data.errors);
    }

    if(!response.ok){
      console.log("we are not ok")
      // return Promise.reject({error: data.errors, data: null});      
      // return Promise.reject(data.errors);
      throw new Error(response.statusText);
    }

    // return Promise.resolve({error: null, data: data});    
    return Promise.resolve(data);
  } 
  catch (error) {
    console.log("running catch")
    // return Promise.reject({error: error, data: null});    
    return Promise.reject(error);
  }

}