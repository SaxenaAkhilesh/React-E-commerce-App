import axios from "axios";

const baseURL = process.env.PRODUCT_API_BASE_URL;

const getData = (url:string) => {
  return axios.get(baseURL + url);
};


export {
  getData,
};