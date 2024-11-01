import axios from "axios";

const url = process.env.REACT_APP_BURL;

// Function to add a new expense
export const addExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${url}/api/expenses`, expenseData, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("auth-token")}`, // Assuming you store the token in local storage
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};

// Function to get all expenses or filtered expenses by month and year
export const getExpenses = async (month, year, category) => {
  try {
    const response = await axios.get(`${url}/api/expenses`, {
      params: { month, year, category },
      headers: {
        "auth-token": localStorage.getItem("auth-token"), // Assumes the token is in local storage
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};
export const getExpensewithID = async (id) => {
  try {
    const response = await axios.get(`${url}/api/expenses/${id}`, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"), // Assumes the token is in local storage
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

// Function to update an expense by id
export const updateExpense = async (id, expenseData) => {
  try {
    const response = await axios.put(`${url}/api/expenses/${id}`, expenseData, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("auth-token")}`, // Assuming you store the token in local storage
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
};

// Function to delete an expense by id
export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${url}/api/expenses/${id}`, {
      headers: {
        "auth-token": `${localStorage.getItem("auth-token")}`, // Assuming you store the token in local storage
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust your base URL accordingly
  headers: {
    "auth-token": localStorage.getItem("auth-token"), // Or however you manage your token
  },
});

export const createCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post("/categories", categoryData);
    return response.data; // Return the created category
  } catch (error) {
    throw error.response.data; // Throw an error if the request fails
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data; // Return the list of categories
  } catch (error) {
    throw error.response.data; // Throw an error if the request fails
  }
};

// Update an existing category
export const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await axiosInstance.put(
      `/categories/${categoryId}`,
      categoryData
    );
    return response.data; // Return the updated category
  } catch (error) {
    throw error.response.data; // Throw an error if the request fails
  }
};

// Delete a category
export const deleteCategory = async (categoryId) => {
  try {
    await axiosInstance.delete(`/categories/${categoryId}`);
  } catch (error) {
    throw error.response.data; // Throw an error if the request fails
  }
};
