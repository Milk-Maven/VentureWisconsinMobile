import axios from "axios";
const BASE_URL = "http://localhost:3000/";
const UserFactory = () => {
  const getAllUser = async () => {
    console.log(`${BASE_URL}users`);
    const res = await axios.get(`${BASE_URL}users`);
    return res.data;
  };
  const factory = { getAllUser };
  return factory;
};

export const db = { users: UserFactory() };
