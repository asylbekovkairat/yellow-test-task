import axios from "axios";

const Api = axios.create({
  baseURL: "https://jogtracker.herokuapp.com/api/v1/",
});

const data = JSON.parse(localStorage.getItem("authData"));

Api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + data.access_token;
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default {
  getAuthUser: () => Api.get("auth/user"),
  getAllJogs: () => Api.get("data/sync"),
  putJogs: (editJog) => Api.put("data/jog", editJog),
  postJogs: (addJog) => Api.post("data/jog", addJog),
  postLetMeIn: (letIn) => Api.post("auth/uuidLogin", letIn) 
};
