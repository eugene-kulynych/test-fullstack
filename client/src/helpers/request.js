import axios from "axios";

const URL = "http://localhost";
const PORT = "5001";

const API_ROUTES = {
  user: {
    register: "/api/register",
    login: "/api/login",
  },
  projects: {
    get: "/api/projects",
    add: "/api/projects",
    remove: "/api/project",
  },
};

const post = async (url, route, data) => {
  try {
    return await axios.post(`${url}${route}`, data);
  } catch (e) {
    console.error(e.message);
    throw e;
  }
};

const get = async (url, route) => {
  try {
    return await axios.get(`${url}${route}`);
  } catch (e) {
    console.error(e.message);
    throw e;
  }
};

const remove = async (url, route, param) => {
  try {
    return await axios.delete(`${url}${route}/${param}`);
  } catch (e) {
    console.error(e.message);
    throw e;
  }
};

export const login = async (data) => {
  return await post(`${URL}:${PORT}`, API_ROUTES.user.login, data);
};

export const register = async (data) => {
  return await post(`${URL}:${PORT}`, API_ROUTES.user.register, data);
};

export const addProject = async (data) => {
  return await post(`${URL}:${PORT}`, API_ROUTES.projects.add, data);
};

export const getProjects = async () => {
  return await get(`${URL}:${PORT}`, API_ROUTES.projects.get);
};

export const removeProject = async (param) => {
  return await remove(`${URL}:${PORT}`, API_ROUTES.projects.remove, param);
};
