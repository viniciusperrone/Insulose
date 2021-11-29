import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.110'
});

export default api;