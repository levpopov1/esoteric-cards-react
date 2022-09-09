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

const handleRequestError = (errors) => {
  return Promise.reject({
    code: errors.response.status,
    message: errors.response.data.errors[0].msg,
    statusText: errors.response.statusText,
  });
};

const handleRequestSuccess = (response) => {
  console.log(response);
  if (response.data.errors) {
    return Promise.reject(response.data.errors);
  }
  return Promise.resolve(response.data);
};

const API = {
  get: (url) =>
    client
      .get(url)
      .then((response) => handleRequestSuccess(response))
      .catch((errors) => handleRequestError(errors)),
  post: (url, data) =>
    client
      .post(url, data)
      .then((response) => handleRequestSuccess(response))
      .catch((errors) => handleRequestError(errors)),
  put: (url, data) =>
    client
      .put(url, data)
      .then((response) => handleRequestSuccess(response))
      .catch((errors) => handleRequestError(errors)),
  patch: (url, data) =>
    client
      .patch(url, data)
      .then((response) => handleRequestSuccess(response))
      .catch((errors) => handleRequestError(errors)),
  delete: (url) =>
    client
      .delete(url)
      .then((response) => handleRequestSuccess(response))
      .catch((errors) => handleRequestError(errors)),
  setToken: (token) => setHeader('Authorization', `Bearer ${token}`),
  clearToken: () => clearHeader('Authorization'),
};

export default API;
