import { Button, Card } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router';

interface PCComponentProps28 {
    title: string;
    image: string;
    fabricante: string;
}

function PCComponent28(props: PCComponentProps28) {
    const router = useRouter()
    return <Card style={{textAlign: 'center', height: '100%'}} sx={{p: 2}}>
       <h5>{props.title}</h5>
       <img src={props.image} style={{height: 350}}/>
       <h6>{props.fabricante}</h6>
       <Button variant="outlined" sx={{mr:1}} onClick={() => router.push('/montagem28')}>
           Selecionar
       </Button>
       <Button variant="outlined" onClick={() => router.push('/detalhes28')}>
           Detalhes
       </Button>
    </Card>
}

export default PCComponent28