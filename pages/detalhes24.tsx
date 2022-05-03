import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EasyHardware.net
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <center>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src="https://static.meupc.net/produto/memoria-kingston-hyperx-fury-hx424c15fb4-n3U9BY-L.jpg"width={250} height={200}/>
            <Typography component="h1" variant="h5">
              4GB Kingston
            </Typography>
            <Typography component="h1" variant="h5">
              Fabricante: Kingston
            </Typography>
            <Typography component="h1" variant="h5">
                Velocidade: 2400 MHz
            </Typography>
            <Typography component="h1" variant="h5">
                Capacidade: 4GB
            </Typography>
            <Typography component="h1" variant="h5">
              Módulo : 1 x 4 
            </Typography>
            <Typography component="h1" variant="h5">
              Descrição: Memória de entrada, recomendada para computadores de escritório.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => router.push('/formulario24')}
              >
                Voltar para página de montagem
              </Button>
              <Grid container>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </center>
    </ThemeProvider>
  );
}