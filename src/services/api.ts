import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-frontend-test.brlogic.com/podcast",
});
