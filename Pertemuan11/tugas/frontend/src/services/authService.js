import axios from "axios";

const API_URL_LOGIN = "https://backendpraktikum-production-0a18.up.railway.app/login";
const API_URL_REGISTER = "https://backendpraktikum-production-0a18.up.railway.app/register";


export const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data;
};
export const register = async (username, password, role) => {
  const response = await axios.post("http://127.0.0.1:8088/register", { username, password, role });
  return response.data;
};
