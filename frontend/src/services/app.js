import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const shortenUrl = (data) => API.post("/shorten", data);

export const getUrls = () => API.get("/urls");