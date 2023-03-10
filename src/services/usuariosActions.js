import axios from "axios";
import endpoints from "../services/endpoints";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(endpoints.usuarios);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (data) => {
  try {
    const { status } = await axios.post(endpoints.usuarios, data);
    return status === 201 ? true : false;
  } catch (error) {
    console.log(error);
  }
};

// export const getInfouser = async (username = "", email = "") => {
//   try {
//     const {data} = await axios.get(`${endpoints.usuarios}?id`)
//   } catch (error) {

//   }
// };
