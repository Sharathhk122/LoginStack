import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

export const signup = (data) => API.post('/signup', data);
export const verifyOtp = (data) => API.post('/verify-otp', data);
export const login = (data) => API.post('/login', data);
