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
            PC Demonstração 2
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid>
            <img src="https://static.meupc.net/produto/processador-intel-core-i7-9700f-bx80684i79700f-z34fTe-L.jpg" width={150} height={100}/>
           I7 9700F
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/placa-mae-asus-rog-strix-h370-f-gaming-DvW556-L.jpg" width={150} height={100}/>
           H370 Asus
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/memoria-kingston-hyperx-fury-hx424c15fb4-n3U9BY-L.jpg" width={150} height={100}/>
           4GB Hyperx fury
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/placa-video-asus-geforce-gtx-1060-dualgtx1060o6g-tR49Gw-L.jpg" width={150} height={100}/>
           GTX 1060 Asus
            </Grid>
            <Grid>
           <img src="https://static.meupc.net/produto/fonte-corsair-cxm-cx750m-hNkw98-L.jpg" width={150} height={100}/>
           Corsair 750W
            </Grid>
            <Grid>
           <img src="https://a-static.mlcdn.com.br/618x463/hd-wd-blue-1tb-7200-rpm-64mb-sata-wd10ezex-00wn4a0-western-digital/inpower4/376/2b5f1cbd1b40aa438c834ff5ca87a2f6.jpg" width={150} height={100}/>
           HD 1TB western digital
            </Grid>
            <Grid>
           <img src="https://cdn.shopify.com/s/files/1/0474/7051/0229/products/CorsairCarbideSPEC-05GamingBlack1.png?v=1630885884" width={150} height={100}/>
           Corsair SPEC 05
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => router.push('/seupc3')}
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