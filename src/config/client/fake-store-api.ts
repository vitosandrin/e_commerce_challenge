import axios from "axios";

export const fakeStoreAPI = axios.create({
  baseURL: "https://fakestoreapi.com",
});
