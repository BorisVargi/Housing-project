import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

let accessToken = '';

export function setAccessToken(token) {
  accessToken = token;
}

axiosInstance.interceptors.request.use((config) => {
  // config - объект запроса
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config; // Прошлый запрос
    if (error.response.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const res = await axios.get('/api/tokens/refresh');
      accessToken = res.data.accessToken;
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
