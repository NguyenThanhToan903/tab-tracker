import axios from "axios";
// import the Axios library from module Axios

export default () => {
  return axios.create({
    //
    baseURL: `http://localhost:8081`,
  });
};
