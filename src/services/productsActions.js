import axios from "axios";

import endpoints from "./endpoints";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(endpoints.productos);
    return data;
  } catch (error) {
    console.log(error);
  }
};
