import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "/",
  headers: {
    "Content-type": "application/json",
  },
});

// const baseURL =
//   process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "/";
// console.log(baseURL);

export default apiClient;
