import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home"
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import { HomeUser } from '../pages/HomeUser/HomeUser'
import { ConfigUser } from '../pages/ConfigUser/ConfigUser'


const AppRoutes = () => {
  return (
    <Routes>
      <Route  path="/" index  element={<Home/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            <Route  path="/feed" element={<HomeUser/>}/>
            <Route  path="/handle" element={<ConfigUser/>}/>
      
    </Routes>
  );
};

export default AppRoutes;
