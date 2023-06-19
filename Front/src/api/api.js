import axios from 'axios';

const api = axios.create({
  baseURL: 'http://romain-gradelet-server.eddi.cloud/projet-disc-otech-back/Back/public/api',
});

// api.interceptors.request.use((request) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }
// });

// api.interceptors.response.use((response) => response, (error) => {
//   if (error.response.status === 401) {
//     window.location = '/login';
//   }

//   return Promise.reject(error);
// });

export default api;
