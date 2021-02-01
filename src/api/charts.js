import axios from "axios";
import { baseUrl } from "../utils";

export const getChart = async params => {
  axios.defaults.baseURL = baseUrl;
  axios.defaults.contentType = "application/json";
  const config = {
    url: "/api/dashboard/chart",
    method: "get",
    params: { id: params.id }
  };

  return await axios(config);
};