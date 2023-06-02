import Axios from 'axios';

const http = Axios.create({
  baseURL: 'http://139.9.113.73',
  timeout: 10000,
});

http.interceptors.request.use((config) => {
  if (config.metaData) {
    if (config.metaData.isSearch) {
      config.data['creditRightFareMin'] =
        config.data['creditRightFareMin'] === ''
          ? 0
          : Number(config.data['creditRightFareMin']);
      config.data['creditRightFareMax'] =
        config.data['creditRightFareMax'] === ''
          ? 0
          : Number(config.data['creditRightFareMax']);
    }
  }
  return config;
});

export default http;
