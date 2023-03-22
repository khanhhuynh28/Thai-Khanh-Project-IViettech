import { API, BASE_URL } from "./constants.api";

export const orderListAPI = {
  getOrderList: (data) => API.get(`${BASE_URL}/order`, data),
};

