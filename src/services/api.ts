import axios from 'axios'

const defaultOptions = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    },
  };


export const api = axios.create(defaultOptions)

api.interceptors.request.use(function (config) {
    const token = process.env.REACT_APP_API_KEY;
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});


export default api