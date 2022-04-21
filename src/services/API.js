import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const BASE_URL = REACT_APP_BASE_URL
  ? REACT_APP_BASE_URL
  : "http://localhost:4000/";

function getItems() {
  return axios.get(`${BASE_URL}`);
}


export { getItems };
