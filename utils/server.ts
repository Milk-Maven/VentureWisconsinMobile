import axios from "axios";
import { BASE_URL } from "./consts";

const createListing = async (payload: any) => {
  console.log(`${BASE_URL}listing/create`);
  return (await axios.post(`${BASE_URL}listing/create`, payload)).data;
};

const deleteListing = async (payload: any) => {
  console.log(`${BASE_URL}listing/create`);
  return (await axios.delete(`${BASE_URL}listing/create`, payload)).data;
};

const getAllListings = async (payload: any) => {
  console.log(`${BASE_URL}listing/getAll`);
  return (await axios.post(`${BASE_URL}listing/getAll`, payload)).data || [];
};

const updateListings = async (payload: any) => {
  console.log(`${BASE_URL}listing/getAll`);
  return (await axios.post(`${BASE_URL}listing/getAll`, payload)).data || [];
};
export const listingsServer: Readonly<any> = {
  createListing,
  deleteListing,
  getAllListings,
  updateListings,
};
