import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Container, Link } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
        <Box>
        <img src="https://clarotatix.vteximg.com.br/arquivos/ids/259314/pc-gamer-desk.png?v=637312130537730000" width={1903} height={400} />
        <Box
        sx={{
          fontSize: 10,
          marginLeft:1,
        }}
        >
        fonte: tecmundo
        </Box>
        </Box>
      <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#0070f3',
        color: 'white',

      }}
      >
        <h1>O Site que Te Ajuda a Montar um PC</h1>
        <h3>São mais de 300 peças disponíveis</h3>
        <h3>É possivel fazer qualquer combinação e nossa ferramenta mostrará quais são os erros de compatibilidade</h3>
        <h3>Não somos exclusivos de nenhuma loja, apenas mostramos a compatibilidade das peças</h3>
        <h2>Montar um PC nunca foi tão fácil!!</h2>
      </Box>
      <Box
      sx={{
        textAlign: 'center',
      }}
      >
      <Button variant='contained' sx={{ mr: 2 }} onClick={() => router.push('/formulario')}>
              Monte Já
            </Button>
      </Box>
      <br></br>
      <Box
       sx={{
        color: 'black',
        marginLeft: 3,

      }}
      >
      <h1>Peças Mais Procuradas</h1>
      </Box>
      <div>
      <br></br>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>
          <center>
          I9 9900K
          </center>
            <img src="https://static.meupc.net/produto/processador-intel-core-i9-9900k-bx80684i99900k-wQj93N-L.jpg "width={400} height={350} />
            <h6>fonte: intel</h6>
          <Button variant="outlined" onClick={() => router.push('/detalheshome1')}>
           Detalhes
       </Button>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <center>
        Obsidian 1000D
          </center>
            <img src="https://static.meupc.net/produto/gabinete-corsair-obsidian-1000d-cc9011148ww-hGZ55E-L.jpg "width={400} height={350} />
            <h6>fonte: corsair</h6>
          <Button variant="outlined" onClick={() => router.push('/detalheshome2')}>
           Detalhes
       </Button>
         </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <center>
        HyperX Fury 1 x 8 GB
          </center>
            <img src="https://static.meupc.net/produto/memoria-kingston-hyperx-fury-hx426c16fb38-u3v75j-L.jpg "width={400} height={350} />
            <h6>fonte: kingston</h6>
          <Button variant="outlined" onClick={() => router.push('/detalheshome3')}>
           Detalhes
       </Button>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <center>
        RM750x
          </center>
            <img src="https://static.meupc.net/produto/fonte-multilaser-ga-ga230semcabo-dJ82Xq-L.jpg "width={400} height={350} />
            <h6>fonte: corsair</h6>
          <Button variant="outlined" onClick={() => router.push('/detalheshome4')}>
           Detalhes
       </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
</div>
      <Box
      sx={{
        marginLeft: 1,
      }}>
      <h5>Veja o Manual do Site :
      <Link color="inherit" href="https://drive.google.com/file/d/1eU11GDoUeONVbwGzqj_Cm7CZqsHVRe84/view">
         Manual
      </Link>
      </h5>
      </Box>
    </div>
  )
}

export default Home
