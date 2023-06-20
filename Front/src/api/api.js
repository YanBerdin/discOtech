import axios from 'axios';

const api = axios.create({
  baseURL: 'http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api',
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
