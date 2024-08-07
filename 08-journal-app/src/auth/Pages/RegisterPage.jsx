import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>

<form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Perico de los Palotes"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="pericodelospalotes@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 3 }}>
            <Grid item xs={12} >
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">

            <Typography sx={{mr:1,}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
