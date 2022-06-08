import React,{Fragment, useEffect, useState} from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import {PreguntasNivelUno,PreguntasNivelDos,PreguntasNivelTres,PreguntasNivelCuatro,PreguntasNivelCinco} from '../questions/preguntas'

const Juego = () => {
    let nivel = 0
    const bandera = true
    const numero =Math.floor(Math.random() * 6)
    const respuesta = (opcion)=>{
        if(nivel == 0){
        if(opcion === PreguntasNivelUno[numero].respuesta){
            alert("opcion corrcta")
            nivel = nivel + 1

            console.log(nivel)
        }else if(opcion != PreguntasNivelUno[numero].respuesta){
            alert("error")
        }
        }
        
        if(nivel == 1){
            if(opcion === PreguntasNivelDos[numero].respuesta){
                alert("opcion corrcta")
                nivel = nivel + 1
                console.log(nivel)
            }
            }
        }
        console.log(nivel)
        if(bandera == true){
        if(nivel == 0){
            console.log(nivel)
             const preguntanNivelUno = PreguntasNivelUno[numero]
                return (
                    <>
                        <h1>{preguntanNivelUno.pregunta}</h1>
                        <button onClick={()=>respuesta(preguntanNivelUno.opciones[0])}>{preguntanNivelUno.opciones[0]}</button>
                        <button onClick={()=>respuesta(preguntanNivelUno.opciones[1])}>{preguntanNivelUno.opciones[1]}</button>
                        <button onClick={()=>respuesta(preguntanNivelUno.opciones[2])}>{preguntanNivelUno.opciones[2]}</button>
                        <button onClick={()=>respuesta(preguntanNivelUno.opciones[3])}>{preguntanNivelUno.opciones[3]}</button>
                    </>
                )
           }else if(nivel == 1){
                console.log(nivel)
                console.log("entre")
             const preguntanNivelDos = PreguntasNivelDos[numero]
                return (
                    <>
                        <h1>{preguntanNivelDos.pregunta}</h1>
                        <button onClick={()=>respuesta(preguntanNivelDos.opciones[0])}>{preguntanNivelDos.opciones[0]}</button>
                        <button onClick={()=>respuesta(preguntanNivelDos.opciones[1])}>{preguntanNivelDos.opciones[1]}</button>
                        <button onClick={()=>respuesta(preguntanNivelDos.opciones[2])}>{preguntanNivelDos.opciones[2]}</button>
                        <button onClick={()=>respuesta(preguntanNivelDos.opciones[3])}>{preguntanNivelDos.opciones[3]}</button>
                    </>
                )
           }
        }

    return ( 
        <Fragment>

        </Fragment>
     );
}
 
export default Juego;










   // const [visible,setVisible] = useState(false)
    // const handler = () => setVisible(true);
    // const closeHandler = () => {
    //     setVisible(false);
    //   };
    // const [user, SetUser] = useState ({
    //     nombre:"",
    //     puntaje: 0
    // })













      {/* {user.nombre == "" ? 
            <>
            <Button auto shadow onClick={handler}>
            Iniciar Partida
        </Button>
    <Modal
    closeButton
    open={visible}
    onClose={closeHandler}
    >
    <Modal.Header>
      <Text id="modal-title" size={18}>
        Bienvenido a
        <Text b size={18}>
        preguntados
        </Text>
      </Text>
    </Modal.Header>
    <Modal.Body>
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Nombre"
        value={user.nombre}
        name="nombre"
        onChange={(e) =>
            SetUser({
                ...user,
                [e.target.name]: e.target.value
            })}
            />
    </Modal.Body>
    <Modal.Footer>
      <Button auto onClick={closeHandler}>
        Continuar
      </Button>
    </Modal.Footer>
    </Modal>
            </>
    
            : "chao"}
             */}