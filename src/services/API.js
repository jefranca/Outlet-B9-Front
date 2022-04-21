import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const BASE_URL = REACT_APP_BASE_URL
  ? REACT_APP_BASE_URL
  : "http://localhost:4000/";

function config(token) {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
}

function getItems() {
  return axios.get(`${BASE_URL}`);
}

function postSignIn(body) {
  return axios.post(`${BASE_URL}sign-in`, body);
}

function postSignUp(body) {
  return axios.post(`${BASE_URL}sign-up`, body);
}

function deleteSession(token) {
  return axios.delete(`${BASE_URL}logout`, config(token));
}

function sellItem(id) {
  return axios.put(`${BASE_URL}item/sell/${id}`);
}

function postItem(body){
  return axios.post(`${BASE_URL}item/`, body)
}

export { getItems, postSignIn, postSignUp, deleteSession, sellItem, postItem };
