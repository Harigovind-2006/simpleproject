import axios from "axios";

const API = axios.create({
  baseURL: "https://urlshortner-srak.onrender.com",
});

export const shortenUrl = (data) => API.post("/shorten", data);

export const getUrls = () => API.get("/urls");