import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // 요청이 시작되기 전에 수행할 작업 (예: 토큰 추가)
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 오류가 발생했을 때 수행할 작업
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // 응답이 성공적으로 도착했을 때 수행할 작업
    return response;
  },
  (error) => {
    // 응답 오류가 발생했을 때 수행할 작업 (예: 토큰 만료 처리)
    if (error.response && error.response.status === 401) {
      // 예: 토큰이 만료된 경우 로그아웃 처리
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;