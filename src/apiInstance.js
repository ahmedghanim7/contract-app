// import axios from "axios";
const axios = require("axios").default

export const apiInstance = axios.create({
  baseURL: "http://172.16.1.21:3031/api",
});
