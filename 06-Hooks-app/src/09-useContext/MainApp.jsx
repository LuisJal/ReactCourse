import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar/>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to={"/About"} />} />
      </Routes>
    </UserProvider>
  );
};
