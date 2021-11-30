import axios from 'axios';

const api = axios.create({
  baseURL: 'https://insulose-backend-test.herokuapp.com'
});

export default api;