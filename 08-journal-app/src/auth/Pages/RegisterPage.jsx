import { AuthLayout } from "../layout/AuthLayout";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";

import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const formData = {
  displayName: "",
  email: "",
  password: "",
};
const formValidaciones = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

export const RegisterPage = () => {
  const dispatch = useDispatch(); 
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidaciones);

  const [formSubmmited, setFormSubmmited] = useState(false);
  const {status,errorMessage} = useSelector(state=>state.auth);
  const isAuthenticathed = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmmited(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      {/* <h1>FormValid: {isFormValid ? "Valid" : "incorrecto"}</h1> */}
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Perico de los Palotes"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmmited}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="pericodelospalotes@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmmited}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 3 }}>
          <Grid item xs={12} display={!!errorMessage?'':'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
            <Grid item xs={12}>
              <Button disabled={isAuthenticathed} type="submit" variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
