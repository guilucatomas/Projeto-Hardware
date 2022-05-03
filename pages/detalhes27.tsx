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
            <img src="https://a-static.mlcdn.com.br/618x463/hd-wd-blue-1tb-7200-rpm-64mb-sata-wd10ezex-00wn4a0-western-digital/inpower4/376/2b5f1cbd1b40aa438c834ff5ca87a2f6.jpg"width={250} height={200}/>
            <Typography component="h1" variant="h5">
            WD10EZEX 1 TB
            </Typography>
            <Typography component="h1" variant="h5">
              Fabricante: Western Digital
            </Typography>
            <Typography component="h1" variant="h5">
               Capacidade: 1TB
            </Typography>
            <Typography component="h1" variant="h5">
               Velocidade: 7200
            </Typography>
            <Typography component="h1" variant="h5">
              Descrição: HD padrão, recomendado para jogos e escritório.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => router.push('/formulario27')}
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
        <br/>
        <br/>
        <br/>
        </center>
    </ThemeProvider>
  );
}