import axios from "axios";

export const fetchPosts = async (body, endPoint) => {
  const token = localStorage.getItem("auth_token") || "";
  let headers = {};
  if (token) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  return await axios
    .post(`http://3.111.196.92:8020/${endPoint}`, body, {
      headers: headers,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};