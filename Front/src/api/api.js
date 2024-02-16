// = File manager for api requests and token
import axios from 'axios';

/**
 * The axios instance for making API requests.
 * @type {import("axios").AxiosInstance}
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
