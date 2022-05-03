import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

export default function SignIn() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            PC DEMONSTRAÇÃO
          </Typography>
          <br></br>
          <Typography component="h1" variant="h6" color="green">
            Parabéns sua configuração está compativel!!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid>
           <img src="https://static.meupc.net/produto/processador-amd-ryzen-5-2600-yd2600bbafbox-z5Fiu4-L.jpg" width={150} height={100}/>
           RYZEN 5 2600
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/placa-mae-asus-rog-strix-b450-f-gaming-cbX6k7-L.jpg" width={150} height={100}/>
           ASUS ROG STRIX B450
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/memoria-kingston-hyperx-fury-hx426c16fb34-rG9Ed9-L.jpg" width={150} height={100}/>
           4GB Kingston
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/placa-video-asus-geforce-gtx-1050-geforcegtx1050-CbM9o7-L.jpg" width={150} height={100}/>
           GTX 1050 
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/fonte-corsair-cv-cv550550w80plusbronze-t8T6tP-L.jpg" width={150} height={100}/>
           Corsair 550W 
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/hdd-seagate-barracuda-st1000dm010-s6Eo3v-L.jpg" width={150} height={100}/>
           HD Seagate 1TB 
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/gabinete-gamemax-shine-g517-shineg517-i7gPw5-L.jpg" width={150} height={100}/>
           Gabinete Gammemax G517 
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => router.push('/formulario22')}
              sx={{ mt: 3, mb: 1 }}
            >
              Montar outra Configuração
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => router.push('/formulario')}
              sx={{ mt: 1, mb: 1 }}
            >
              Modificar configuração
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => router.push('/perfil')}
              sx={{ mt: 1, mb: 1 }}
            >
              Perfil
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </ThemeProvider>
  );
}