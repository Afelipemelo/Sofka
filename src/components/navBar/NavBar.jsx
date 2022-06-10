import React from 'react';
import { Text } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Grid.Container className='NavBar'>
            <Grid xs={4} md={8} className="titulo"> 
            <Link to='/' style={{textDecoration:'none'}}>
                
            <Text
                h1
                size={25}
                
                color="warning"
                css={{
                    margin:"5px 0px 5px 15px"
                }}
                weight="bold"
                >
                Preguntados
                </Text> 
            </Link>
            </Grid>
            <Grid xs={8} md={4} className="InicioPuntaje">
            <Link to='/Juego'  style={{textDecoration:'none'}}>
            <Text
                h1
                size={25}
                
                color="warning"
                css={{
                    margin:"5px 0px 5px 15px"
            }}
            weight="bold"
            >
                Inicio
                </Text> 
                    </Link>
                <Link to='/Historial'  style={{textDecoration:'none'}}>
                <Text
                h1
                size={25}
                color="warning"
                css={{
                    margin:"5px 15px 5px 15px"
                }}
                weight="bold"
                >
                Puntajes
                </Text>  
                    </Link>
            </Grid>
        </Grid.Container>
      );
}
 
export default NavBar;