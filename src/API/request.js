import axios from "axios";

import { defaultUrl } from "./constants";

const request = options => {
  let { url } = options;
  url = `${defaultUrl}${url}`;

  return axios({ ...options, url }).then(response => {
    if (response.status !== 200) throw response;
    return response.data;
  });
  // TODO error handling of request
  // .catch(error => throw error);
};

export default request;
