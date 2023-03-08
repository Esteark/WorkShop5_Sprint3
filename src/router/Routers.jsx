import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import DetalleProducto from "../components/detalleProducto/DetalleProducto";
import HomeLogin from "../components/login/HomeLogin";
import Carrito from "../components/carrito/Carrito";
import { getInfoUser } from "../services/infoLocalUser";
import { getProducts } from "../services/productsActions";

export const AppContext = createContext();
const Routers = () => {
  const [userLogin, setUserLogin] = useState(getInfoUser());
  const [products, setProductos] = useState([]);
  const [inCar, setInCar] = useState([{}])
  const obtenerProducts = async () => {
    const productos = await getProducts();
    setProductos(productos);
  };
  useEffect(() => {
    obtenerProducts();
  }, []);
  useEffect(() => {
   console.log(inCar)
  }, [inCar])
  
  return (
    <AppContext.Provider value={{ userLogin, setUserLogin, products, inCar, setInCar }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/producto/:idProduct" element={<DetalleProducto />} />
          <Route path="/car" element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
