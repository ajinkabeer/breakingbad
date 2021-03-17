import axios from 'axios';

const host = 'https://breakingbadapi.com/api';

const apiClient = axios.create({
  baseURL: host,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default apiClient;
