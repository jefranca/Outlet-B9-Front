import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const BASE_URL = REACT_APP_BASE_URL
  ? REACT_APP_BASE_URL
  : "http://localhost:4000/";

function getItems() {
  return axios.get(`${BASE_URL}`);
}

  function postSignIn(body){
    return axios.post(`${BASE_URL}sign-in`, body)
}

function postSignUp(body){
  return axios.post(`${BASE_URL}sign-up`, body)
}

export { getItems, postSignIn, postSignUp };
