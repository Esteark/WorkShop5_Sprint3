import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import DetalleProducto from "../components/detalleProducto/DetalleProducto";
import HomeLogin from "../components/login/HomeLogin";
import Carrito from "../components/carrito/Carrito";
import { getCarrito, getInfoUser } from "../services/infoLocalUser";
import { getProducts } from "../services/productsActions";
import Register from "../components/login/register/Register";
import { getUsers } from "../services/usuariosActions";
import Allproducts from "../components/home/allProducts/Allproducts";

export const AppContext = createContext();
const Routers = () => {
  const [userLogin, setUserLogin] = useState({});
  const [products, setProductos] = useState([]);
  const [inCar, setInCar] = useState(getCarrito());
  const [validateUsers, setValidateUsers] = useState([]);
  const [formatterPeso, setFormatterPeso] = useState(0);
  useEffect(() => {
    const formato = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

    setFormatterPeso(formato);
  }, []);

  const obtenerProducts = async () => {
    const productos = await getProducts();
    setProductos(productos);
  };
  const getUsuarios = async () => {
    const data = await getUsers();
    setValidateUsers(data);
  };

  const validateUserSesion = () => {
    setUserLogin(getInfoUser());
  };
  useEffect(() => {
    validateUserSesion();
    obtenerProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        userLogin,
        setUserLogin,
        products,
        inCar,
        setInCar,
        validateUserSesion,
        formatterPeso,
        validateUsers,
        getUsuarios,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/producto/:idProduct" element={<DetalleProducto />} />
          <Route path="/car" element={<Carrito />} />
          <Route path="/products" element={<Allproducts />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
