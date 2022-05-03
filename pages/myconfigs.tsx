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
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
    <div>
  <div>
  <h1>Minhas Configurações</h1>
  </div>
  <div>
  <br></br>
  <Box sx={{ width: '100%' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={3}>
      <Item>
      <center>
      PC demonstração
      </center>
        <img src="https://static.meupc.net/produto/gabinete-gamemax-shine-g517-shineg517-i7gPw5-L.jpg "width={400} height={420} />
      <Button variant="outlined" onClick={() => router.push('/seupc')}>
       Veja
   </Button>
   <h6>fonte: Gamemax</h6>
      </Item>
    </Grid>
    <Grid item xs={3}>
      <Item>
      <center>
    PC demonstração 2
      </center>
        <img src="https://cdn.shopify.com/s/files/1/0474/7051/0229/products/CorsairCarbideSPEC-05GamingBlack1.png?v=1630885884 "width={400} height={420} />
      <Button variant="outlined" onClick={() => router.push('/seupc3')}>
       Veja
   </Button>
   <h6>fonte: Corsair</h6>
     </Item>
    </Grid>
  </Grid>
</Box>
</div>
  <div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  </div>
</div>
)
}











































