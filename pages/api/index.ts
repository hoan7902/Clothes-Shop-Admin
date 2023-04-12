import axios from "axios";

const API = axios.create({ baseURL: "http://localhost/PHP_DB_SHOP" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user') || '{}').token
    }`;
  }

  return req;
});

export const loginUser = async (dataForm: any) => {
  const response = await API.post("/api/user/login", dataForm);
  return response.data; 
}

export const addCategory = async(category: any) => {
  console.log("check category: ", category);
  const response = await API.post("/api/category", category);
  console.log(response);
  // const jsonData = JSON.stringify(response.data);
  // return jsonData;
}