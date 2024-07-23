import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import Button from "react-bootstrap/esm/Button";
/* import { Message } from "./Message"; */

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  /* 
  useEffect(() => {
    //console.log("useEffect called!!");
  }, []);

  useEffect(() => {
    //console.log("usernameChanged!");
  }, [username]);

  useEffect(() => {
    //console.log("emailChanged!");
  }, [email]); */

  return (
    <>
      <h1>Formulario con CustomHook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="luis@luis.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      {/* {username === "Luison" && <Message />} */}

      <Button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</Button>
    </>



  );
};
