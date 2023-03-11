import { API, BASE_URL } from "./constants.api";

export const orderApi = {
  order: (data) => API.post(`${BASE_URL}/order`, data),
};