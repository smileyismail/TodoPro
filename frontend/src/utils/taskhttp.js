import axios from "axios";

const baseURL = "http://localhost:8000/api";
const BASE_URL = "http://localhost:8000/api";

const apiCall = async (method, endpoint, data, params) => {
  const options = {
    method: method ? method : "GET",
    url: endpoint,
    data: data ? data : undefined,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const fetchTasks = () => {
  return apiCall("GET", `${baseURL}/getTasks`);
};

export const postTask = (data) => {
  return apiCall("POST", `${baseURL}/addTask`, data);
};

export const deleteTask = (id) => {
  return apiCall("DELETE", `${baseURL}/deleteTask/${id}`);
};

export const updateTask = (id, data) => {
  console.log(data);
  return apiCall("PUT", `${baseURL}/updateTask/${id}`, data);
};

export async function deleteTodos(id) {
  await axios.delete(`${BASE_URL}/api/todos/delete/${id}`);
}

export async function updateTodos(id, data) {
  await axios.put(`${BASE_URL}/api/todos/update/${id}`, data);
}

export async function checkTodo(id, checked) {
  await axios.put(`${BASE_URL}/api/todos/check/${id}`, { checked });
}