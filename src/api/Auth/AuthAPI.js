import axios from "axios";

let url = process.env.REACT_APP_BURL;

export const signup = async (name, email, password) => {
  const resp = await axios.post(`${url}/api/auth/create`, {
    email,
    name,
    password,
  });
  console.log(resp);
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${url}/api/auth/login`, {
      email,
      password,
    });
    return response.data; // Return the response data (e.g., user info, auth token)
  } catch (error) {
    console.error("Login error:", error.response.data); // Log the error for debugging
    throw error; // Rethrow the error to handle it in your component
  }
};
