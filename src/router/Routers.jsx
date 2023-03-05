import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import HomeLogin from "../components/login/HomeLogin";
import SeccionPago from "../components/seccionPago/SeccionPago";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeccionPago />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
