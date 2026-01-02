import axios from "axios";

export const API = axios.create({
  baseURL: "https://contact-management-baend.onrender.com/api/contacts"
});
