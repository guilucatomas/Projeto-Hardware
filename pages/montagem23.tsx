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
      <Container component="main" maxWidth="xs">
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
            Sua Configuração
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid>
            <img src="https://static.meupc.net/produto/processador-intel-core-i7-9700f-bx80684i79700f-z34fTe-L.jpg" width={150} height={100}/>
           I7 9700F
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/placa-mae-asus-prime-a320m-kbr-jNN829-L.jpg" width={150} height={100}/>
           ASUS PRIME A320
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="Memória"
              label="Memória"
              id="Memória"
              autoComplete="Memória"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="placa de vídeo"
              label="placa de vídeo"
              id="placa de vídeo"
              autoComplete="placa de vídeo"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Fonte"
              label="Fonte"
              id="Fonte"
              autoComplete="Fonte"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="HD"
              label="HD"
              id="HD"
              autoComplete="HD"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Gabinete"
              label="Gabinete"
              id="Gabinete"
              autoComplete="Gabinete"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="nome configuração"
              label="nome configuração"
              name="nome configuração"
              autoComplete="nome configuração"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => router.push('/formulario24')}
              sx={{ mt: 3, mb: 2 }}
            >
              Adicionar mais Peças
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => router.push('/seupc2')}
            >
              Salvar Configuração
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}