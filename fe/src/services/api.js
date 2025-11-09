import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getTransactions = () => API.get("/transactions/");
export const addTransaction = (data) => API.post("/transactions/", data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);
export const getBalance = () => API.get("/balance/");
