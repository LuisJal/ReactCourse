import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const algo = useContext(UserContext);
  const { user, setuser } = useContext(UserContext);
  return (
    <>
      <h1>Usuario</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() =>
          setuser({
            id: 123,
            name: "Luis Palacios",
            email: "luis@luis.com",
          })
        }
        className="btn btn-primary"
      >
        Agregar Usuario
      </button>

      <hr />
    </>
  );
};
