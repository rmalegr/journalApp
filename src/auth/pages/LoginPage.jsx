import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear  Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Jhon doe"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo Electronico"
              type="password"
              placeholder="johnDoe@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              {/* sm md xl */}
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes Cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              {' '}
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
