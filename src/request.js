import axios from "axios";

const BASE_URL = "https://mern-app222.herokuapp.com";



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});