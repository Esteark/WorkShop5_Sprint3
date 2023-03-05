import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import HomeLogin from "../components/login/HomeLogin";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
