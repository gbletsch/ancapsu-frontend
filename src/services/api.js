import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_AXIOS_URL;
// console.log("API", API_ENDPOINT);

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export default api;
