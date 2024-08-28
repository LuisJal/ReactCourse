import React from "react";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

export const JournaLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn">
      {/* NavBar drawerWith*/}

      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <Toolbar/>

        {/* ToolBox */}

        {children}
      </Box>
    </Box>
  );
};
