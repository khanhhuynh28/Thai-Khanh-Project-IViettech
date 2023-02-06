import { API, BASE_URL } from './constants.api';

export const authApi = {
  // {
  //    username: "abcd",
  //    password: "abcdef"
  // }
  login: (data) => API.post(`${BASE_URL}/api/auth/login`, data),
  register: (data) => API.post(`${BASE_URL}/api/auth/users`, data),
};
