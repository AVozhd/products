import request from "./request";

const API = {
  searchRequest: params =>
    request({
      url: "/autocomplete/search",
      method: "GET",
      params
    }),

  lookupRequest: params =>
    request({
      url: "/autocomplete/lookup",
      method: "GET",
      params
    }),

  getProductRequest: params =>
    request({
      url: "/products/get",
      method: "GET",
      params
    })
};

export default API;
