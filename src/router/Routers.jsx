import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "../components/carrito/Carrito";
import DetalleProducto from "../components/detalleProducto/DetalleProducto";
import Home from "../components/home/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DetalleProducto/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
