import axios from "axios";
import endpoints from "./endpoints";

export const getOfertas = async () => {
  try {
    const { data } = await axios.get(endpoints.ofertas);
    return data;
  } catch (error) {
    console.log(error);
  }
};
