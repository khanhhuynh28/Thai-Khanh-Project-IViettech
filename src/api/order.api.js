import { API, BASE_URL } from "./constants.api";

export const orderApi = {
  postOrder: (data) => API.post(`${BASE_URL}/order`, data),
  
};