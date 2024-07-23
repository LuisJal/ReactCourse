import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { hola,user } = useContext(UserContext);
  return (
    <>
      <h1>Hola <small>{user?.name}</small></h1>
      <hr />
    </>
  );
};
