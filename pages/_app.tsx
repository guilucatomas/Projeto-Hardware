import { AppBar, Container, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <div>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }} >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push('/')}
          >
            { }
            <Typography variant="h6">
              EasyHardware.net
            </Typography>
          </IconButton>
          <div>
            <Button variant='contained' sx={{ mr: 2 }} onClick={() => router.push('/formulario')}>
              Monte Já
            </Button>
            <Button variant='contained' onClick={() => router.push('/login')}>Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Component {...pageProps} />
    </Box>



    <Box
      component="footer"
      sx={{
        position: 'auto',
        width: '100%',
        bottom: '0',
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: '#1a76d2'
      }}
    >
      <Container maxWidth="sm">
        <Typography
          sx={{
            color: 'white'
          }}
          variant="body1" align="center">
          EasyHardware.net
        </Typography>
      </Container>
    </Box>
  </div>

}

export default MyApp