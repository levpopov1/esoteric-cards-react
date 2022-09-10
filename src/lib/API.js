import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setHeader = (headerName, headerValue) => {
  client.defaults.headers.common[headerName] = headerValue;
};

const clearHeader = (headerName) => {
  client.defaults.headers.common[headerName] = null;
};

const handleError = (error) => {
  // console.log(error);
  return Promise.reject(error.response.data.error);
};

const handleResponse = (response) => {
  // console.log(response);
  return Promise.resolve(response.data);
};

const API = {
  get: (url) =>
    client
      .get(url)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error)),
  post: (url, data) =>
    client
      .post(url, data)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error)),
  put: (url, data) =>
    client
      .put(url, data)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error)),
  patch: (url, data) =>
    client
      .patch(url, data)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error)),
  delete: (url) =>
    client
      .delete(url)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error)),
  setToken: (token) => setHeader('Authorization', `Bearer ${token}`),
  clearToken: () => clearHeader('Authorization'),
};

export default API;
