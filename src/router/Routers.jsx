import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLogin from "../components/login/HomeLogin";
import Home from "../components/home/Home"
import { getInfoUser } from "../services/infoLocalUser";

export const AppContext = createContext()
const Routers = () => {
  const [userLogin, setUserLogin] = useState(getInfoUser())
  return (
    <AppContext.Provider value={{userLogin, setUserLogin}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
