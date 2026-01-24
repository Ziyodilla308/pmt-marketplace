import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL as string,
    headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API ERROR:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
