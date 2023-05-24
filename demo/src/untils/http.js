import Axios from 'axios';

const http = Axios.create({
  baseURL: 'http://139.9.113.73',
  timeout: 10000,
});

export default http;
