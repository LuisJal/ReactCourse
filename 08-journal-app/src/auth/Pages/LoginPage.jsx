import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { starSignInWithEmailAndPassword, startGoogleSignIn } from "../../store/auth/thunks";


const formData = {email:'', password:''}
export const LoginPage = () => {
  const dispatch = useDispatch(); // Constante para hacer el dispatch y uso de funciones del thunks

  const { status,errorMessage } = useSelector((state) => state.auth);

  const isAuthenticathed = useMemo(() => status === "checking", [status]);

  const { email, password, onInputChange } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(starSignInWithEmailAndPassword({email,password})); //AL ser asincrona checkingcredentials podria hacer el dispatch de una, pero voy a hacer dos cosas en este thunks
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button 
              disabled={isAuthenticathed}
              type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticathed} variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Seleccionar o Crear Cuenta
            </Link>
            
          </Grid>
          <Grid item xs={12} display={!!errorMessage?'':'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
