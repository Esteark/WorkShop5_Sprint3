import axios from "axios";
import endpoints from "../services/endpoints";

export const getInfoUser = async () => {
  try {
    const { data } = await axios.get(endpoints.usuarios);
    return data;
  } catch (error) {
    console.log(error);
  }
};
