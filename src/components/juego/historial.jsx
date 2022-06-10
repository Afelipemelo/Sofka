import React, {useState,useEffect, Fragment} from 'react'
import { Table } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';
import { Button} from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Historial = () => {
  //ESTADO PARA EXTRAER LA INFORMACION DEL LOCALSTORAGE
  const [puntajes , setPuntajes] = useState(JSON.parse(localStorage.getItem("usuarios")))
  return ( 
    <>
      <Grid.Container xs={12} md={6} className='puntajesContainer'>
        <Table
          bordered
          shadow={false}
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header >
            <Table.Column>Nombre</Table.Column>
            <Table.Column>Puntaje</Table.Column>
          </Table.Header>
          <Table.Body>
            {puntajes.map((x) =>(
              <Table.Row key={x.userName}>
                <Table.Cell>{x.userName}</Table.Cell>
                <Table.Cell>{x.puntaje}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Grid.Container>
      <div className='puntaje'>
        <Link to='/Juego' style={{textDecoration:'none'}}>
          <Button auto color="warning" size="xl">Jugar</Button>
        </Link>
      </div>
    </>
  );
}
export default Historial;