import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import DetalleProducto from "../components/detalleProducto/DetalleProducto";
import HomeLogin from "../components/login/HomeLogin";
import { getInfoUser } from "../services/infoLocalUser";
import { getProducts } from "../services/productsActions";
import Register from "../components/login/register/Register";

export const AppContext = createContext();
const Routers = () => {
  const [userLogin, setUserLogin] = useState({});
  const [products, setProductos] = useState([]);
  const obtenerProducts = async () => {
    const productos = await getProducts();
    setProductos(productos);
  };
  const validateUserSesion = () => {
    setUserLogin(getInfoUser());
    console.log("entro");
  };
  useEffect(() => {
    validateUserSesion();
    obtenerProducts();
  }, []);
  useEffect(() => {
    console.log(userLogin);
  }, [userLogin]);

  return (
    <AppContext.Provider
      value={{ userLogin, setUserLogin, products, validateUserSesion }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/producto/:idProduct" element={<DetalleProducto />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
