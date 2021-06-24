import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
});

const setInstanceHeader = (headerName, headerValue) => {
  instance.defaults.headers.common[headerName] = headerValue;
}

const clearInstanceHeader = (headerName) => {
  instance.defaults.headers.common[headerName] = null;
}

const handleReqeustError = (errors) => {
  return Promise.reject(errors);
}

const handleRequesSuccess = (response) => {
  console.log(response)
  if(response.data.errors){
    return Promise.reject(response.data.errors);
  }
  return Promise.resolve(response.data);
}

const API = {
  get: (url) => 
    instance.get(url).then(response => handleRequesSuccess(response)).catch(errors => handleReqeustError(errors)),
  post: (url, data) => 
    instance.post(url, data).then(response => handleRequesSuccess(response)).catch(errors => handleReqeustError(errors)),
  put: (url, data) => 
    instance.put(url, data).then(response => handleRequesSuccess(response)).catch(errors => handleReqeustError(errors)),
  patch: (url, data) => 
    instance.patch(url, data).then(response => handleRequesSuccess(response)).catch(errors => handleReqeustError(errors)),
  delete: (url) => 
    instance.delete(url).then(response => handleRequesSuccess(response)).catch(errors => handleReqeustError(errors)),
  setToken: (token) =>
    setInstanceHeader('Authorization', `Bearer ${token}`),
  clearToken: () =>
    clearInstanceHeader('Authorization')
}

export default API;