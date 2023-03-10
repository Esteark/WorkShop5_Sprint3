import axios from "axios";
import endpoints from "./endpoints";

export const addCompra = async (data) => {
  try {
    const { status } = await axios.post(endpoints.compras, data);
    return status >= 200 && status <= 299 ? true : false;
  } catch (error) {
    console.log(error);
  }
};
