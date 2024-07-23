import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "El loco",
    email: "luis@luis.com",
  });

  const { username, email } = formState;
  const onUsernameChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onEmailChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("useEffect called!!");
  }, []);

  useEffect(() => {
    //console.log("usernameChanged!");
  }, [username]);

  useEffect(() => {
    //console.log("emailChanged!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onUsernameChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="luis@luis.com"
        name="email"
        value={email}
        onChange={onEmailChange}
      />
      {username === "Luison" && <Message />}

   
    </>
  );
};
