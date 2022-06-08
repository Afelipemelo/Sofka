import React from 'react';
import { Text } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';

const NavBar = () => {
    return (
        <Grid.Container className='NavBar'>
            <Grid xs={4} md={8}> 
            <Text
                h1
                size={40}
                css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                fontFamily: "'Bebas Neue', cursive"
                }}
                weight="bold"
                >
                Preguntados
                </Text> 
            </Grid>
            <Grid xs={8} md={4} className="InicioPuntaje">
                <Text
                h1
                size={40}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    fontFamily: "'Bebas Neue', cursive"
                }}
                weight="bold"
                >
                Inicio
                </Text> 
                <Text
                h1
                size={40}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    fontFamily: "'Bebas Neue', cursive"
                }}
                weight="bold"
                >
                Puntajes
                </Text> 
            </Grid>
        </Grid.Container>
      );
}
 
export default NavBar;