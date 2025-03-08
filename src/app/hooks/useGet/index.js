import axios from "axios";

export const fetchGet = async (endPoint, config) => {
  const token = localStorage.getItem("auth_token");

  let headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`; 
  }

  try {
    const response = await axios.get(`api/${endPoint}`, { headers });
    return response.data; 
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    throw error; 
  }
};
