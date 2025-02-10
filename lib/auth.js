import axiosInstance from "./http";
import Cookies from "js-cookie";

export const login = async (formData) => {

  console.log("login", formData);
//   const formData = new FormData();
//   formData.append("username", username);
//   formData.append("password", password);
  const response = await axiosInstance.post(`/token/`, formData);

  console.log("login response", response.data);

  if (response.data) {
    // setAccessToken(response.data.access);
    // setRefreshToken(response.data.refresh);
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
    // Cookies.set("access_token", response.data.access);
    // Cookies.set("refresh_token", response.data.refresh);
  }
  return response.data;
};

export const logout = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};
