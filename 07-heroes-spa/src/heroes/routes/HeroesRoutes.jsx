import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router";
import { DcPage, MarvelPages,Heroe, Search } from "../pages";


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container ">
        <Routes>
          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<Search />} />
          <Route path="heroe/:id" element={<Heroe />} />
        </Routes>
      </div>
    </>
  );
};
