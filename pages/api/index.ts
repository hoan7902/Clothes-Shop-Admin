import axios, { AxiosError } from "axios";

const API = axios.create({ baseURL: "http://localhost/PHP_DB_SHOP" });

API.interceptors.request.use((req) => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user') || '{}').token
    }`;
  }

  return req;
});

export const loginUser = async (dataForm: any) => {
  try {
    const response = await API.post("/api/user/login", dataForm);
    return response.data;
  } catch (error) {
    return (error as AxiosError).response
  } 
}

export const addCategory = async(category: any) => {
  console.log("check request: ", category)
  const response = await API.post("/api/category", category);
  return response;
}

export const getCategories = async (limit: any = 10, frame: any = 1) => {
  const response = await API.get(`/api/categories?limit=${limit}&frame=${frame}`);
  return response;
}

export const getCategoryById = async (id: any) => {
  const response = await API.get(`/api/category/${id}`);
  return response;
}

export const deleteCategory = async (id: any) => {
  const response = await API.delete(`/api/category/${id}`);
  return response;
}

export const updateCategory = async (id: any, name: string, desc: string) => {
  const response = await API.put(`/api/category/${id}`, {
    name, description: desc
  });
  return response;
}

export const addProduct = async (formData: any) => {
  const response = await API.post("/api/product/add", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export const getProducts = async(limit: any = 10, page: any = 1, order_by: string = "desc") => {
  const response = await API.get(`/api/products?limit=${limit}&page=${page}&order_by=${order_by}`);
  return response;
}

export const getSpecificProduct = async(id: any) => {
  const response = await API.get(`/api/product/${id}`);
  return response;
}

export const updateSpecificProduct = async(formData: any) => {
  const response = await API.post("api/product/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
}

export const deleteSpecificProduct = async(id: any) => {
  const response = await API.delete(`api/product/${id}`);
  return response;
}

export const getOrders = async(limit: any = 10, page: any = 1) => {
  const response = await API.get(`api/order/orders?limit=${limit}&frame=${page}`);
  return response;
}

export const updateStatusOrder = async (status: string, orderId: string) => {
  const response = await API.put("api/order/update-status", {
    status, orderId
  });
  return response;
}
