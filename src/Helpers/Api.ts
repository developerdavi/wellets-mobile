import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wellets-api.ondaniel.com.br',
});

export default api;
