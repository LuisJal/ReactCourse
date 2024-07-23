import React from "react";
import {  Route, Routes } from "react-router";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        //Publicas

        <Route path="login/*" element={
          <PublicRoutes>
            <Routes>
{/* Opcion 2 en la que tengo que decirle que la ruta puede llevar todo lo que lleve login en la ruta  */}
            <Route path="/*" element={<LoginPage />} /> 

            </Routes>
            {/* <LoginPage /> //Opcion 1 que funciona bien, te saca a marvel una vez que intentas poner login en la ruta estndo ya loggeado */} 
          </PublicRoutes>
        }/>

        {/* <Route path="login" element={<LoginPage />} /> */}



        //Privadas que voy a encapsular con el PrivateRouter

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }/>


       {/*  <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  );
};
