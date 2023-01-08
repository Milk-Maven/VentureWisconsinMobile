import axios from "axios";
import { BASE_URL } from "./consts";
export const createUser = async (payload: any) => {
  console.log(`${BASE_URL}listing/create`);
  return (await axios.post(`${BASE_URL}listing/create`, payload)).data;
};
